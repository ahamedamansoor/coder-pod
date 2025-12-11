'use client';
import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import {
  BrainCircuit,
  CheckCircle2,
  Mic,
  Sparkles,
  Target,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { reactInterviewQuestions } from '@/components/languages/react/topics/react-interview-questions';

type InterviewQuestion = {
  q: string;
  a: string;
  code?: string | null;
};

type EvaluationStatus = 'correct' | 'partial' | 'wrong';

type EvaluationResult = {
  isCorrect: boolean;
  score: number;
  message: string;
  keywords: string[];
  ideal: string;
  status: EvaluationStatus;
};

type QuestionResult = {
  question: string;
  evaluation: EvaluationResult;
};

const evaluationStatusMeta: Record<
  EvaluationStatus,
  { label: string; badgeClass: string; description: string }
> = {
  correct: {
    label: 'Correct',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    description: 'You hit the key ideas.',
  },
  partial: {
    label: 'Partial',
    badgeClass: 'bg-amber-100 text-amber-800',
    description: 'You’re on the right track.',
  },
  wrong: {
    label: 'Needs Work',
    badgeClass: 'bg-rose-100 text-rose-800',
    description: 'Try to include more keywords.',
  },
};

const QUESTIONS_PER_SESSION = 20;

const sanitizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`~!@#$%^&*()_+=\-[\]{};:'"\\|,.<>/?]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const extractKeywords = (text: string) => {
  const tokens = sanitizeText(text).split(' ').filter(Boolean);
  return Array.from(new Set(tokens.filter((token) => token.length > 2)));
};

const shuffleQuestions = (questions: InterviewQuestion[]) => {
  const copy = [...questions];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const evaluateAnswer = (question: InterviewQuestion, userAnswer: string): EvaluationResult => {
  const ideal = question.a || 'This question does not have an ideal written response yet.';
  const keywords = extractKeywords(ideal);
  const userTokens = new Set(sanitizeText(userAnswer).split(' ').filter(Boolean));
  const matchedKeywords = keywords.filter((keyword) => userTokens.has(keyword));
  const missingKeywords = keywords.filter((keyword) => !matchedKeywords.includes(keyword));
  const ratio = keywords.length ? matchedKeywords.length / keywords.length : 0;
  const score = ratio;
  let status: EvaluationStatus = 'wrong';

  if (keywords.length === 0) {
    status = userAnswer.trim() ? 'partial' : 'wrong';
  } else if (ratio >= 0.5) {
    status = 'correct';
  } else if (ratio >= 0.25) {
    status = 'partial';
  }

  const matchPreview = matchedKeywords
    .slice(0, 4)
    .map((keyword) => `“${keyword}”`)
    .join(', ');
  const missingPreview = missingKeywords.slice(0, 3).join(', ');

  let message = 'Great effort! Keep practicing and the answers will keep improving.';
  if (keywords.length === 0) {
    message = 'This question is still being curated. Focus on the ideal answer for now.';
  } else if (status === 'correct') {
    message = matchPreview
      ? `Nice! You touched on ${matchPreview}. ${
          missingPreview
            ? `You can also mention ${missingPreview} next time.`
            : 'You covered every keyword highlighted in the ideal response.'
        }`
      : 'Nice work! You covered the main idea.';
  } else if (status === 'partial') {
    message = matchPreview
      ? `You’re close! You mentioned ${matchPreview}. ${
          missingPreview
            ? `Add ${missingPreview} next time to cover the rest.`
            : 'Keep building on this to cover the remaining ideas.'
        }`
      : missingPreview
      ? `Good start! Try to mention ${missingPreview}.`
      : 'Keep fleshing out your answer to hit the key ideas.';
  } else {
    message = missingPreview
      ? `Try to cover ${missingPreview}. Think about what the ideal answer emphasizes.`
      : 'Keep practicing to hit more of the key ideas.';
  }

  return {
    isCorrect: status === 'correct',
    score,
    message,
    keywords,
    ideal: ideal.replace(/\n+/g, ' ').trim(),
    status,
  };
};

export const AiInterviewDemo = ({ autoPlay = false }: { autoPlay?: boolean }) => {
  const [sessionKey, setSessionKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [hasSubmittedCurrent, setHasSubmittedCurrent] = useState(false);
  const [showIdeal, setShowIdeal] = useState(false);

  const questionSet = useMemo(() => {
    if (!reactInterviewQuestions.length) return [];
    const shuffled = shuffleQuestions(reactInterviewQuestions);
    return shuffled.slice(0, Math.min(QUESTIONS_PER_SESSION, shuffled.length));
  }, [sessionKey]);

  const questionCount = questionSet.length;
  const isFinished = currentIndex >= questionCount;
  const answeredCount = results.length;
  const progressPercent = questionCount
    ? Math.min(100, Math.round((answeredCount / questionCount) * 100))
    : 0;

  const currentQuestion = questionSet[currentIndex];
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isFinished) {
      textareaRef.current?.focus();
    }
  }, [currentIndex, isFinished]);

  useEffect(() => {
    if (autoPlay) {
      textareaRef.current?.focus();
    }
  }, [autoPlay]);

  const handleSubmitAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentQuestion || !answer.trim() || hasSubmittedCurrent || isFinished) return;
    const evaluation = evaluateAnswer(currentQuestion, answer);
    setResults((prev) => [
      ...prev,
      {
        question: currentQuestion.q,
        evaluation,
      },
    ]);
    setHasSubmittedCurrent(true);
    setShowIdeal(false);
  };

  const handleNextQuestion = () => {
    if (!hasSubmittedCurrent) return;
    if (currentIndex + 1 >= questionCount) {
      setCurrentIndex((prev) => prev + 1);
      setHasSubmittedCurrent(false);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setAnswer('');
    setHasSubmittedCurrent(false);
    setShowIdeal(false);
  };

  const restartInterview = () => {
    setSessionKey((prev) => prev + 1);
    setCurrentIndex(0);
    setResults([]);
    setAnswer('');
    setHasSubmittedCurrent(false);
    setShowIdeal(false);
  };

  const latestResultIndex =
    results.length === 0
      ? -1
      : hasSubmittedCurrent
      ? currentIndex
      : Math.min(results.length - 1, currentIndex - 1);
  const latestResult = latestResultIndex >= 0 ? results[latestResultIndex] : undefined;
  const latestEvaluation = latestResult?.evaluation;
  const latestStatusMeta = latestEvaluation
    ? evaluationStatusMeta[latestEvaluation.status]
    : undefined;

  const correctCount = results.filter((result) => result.evaluation.isCorrect).length;
  const partialCount = results.filter(
    (result) => result.evaluation.status === 'partial'
  ).length;
  const wrongCount = results.filter((result) => result.evaluation.status === 'wrong').length;
  const averageScore = results.length
    ? Math.round(
        (results.reduce((acc, result) => acc + result.evaluation.score, 0) / results.length) *
          100
      )
    : 0;
  const recentResults = results.slice(-4);
  const recentOffset = Math.max(0, results.length - recentResults.length);

  return (
    <div className="w-full rounded-3xl border border-slate-200/60 bg-card p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mic className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  AI Interview
                </p>
                <h2 className="text-xl font-bold text-foreground">React Interview Practice</h2>
              </div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-800">
              {answeredCount}/{questionCount || QUESTIONS_PER_SESSION} answered
            </Badge>
          </div>
          <div className="rounded-full bg-slate-100 dark:bg-slate-900/40 h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {!questionCount ? (
          <Card className="border border-dashed border-slate-300 bg-slate-50">
            <CardContent>
              <p className="text-sm text-muted-foreground">
                There are no interview questions available right now. Please check back shortly.
              </p>
            </CardContent>
          </Card>
        ) : isFinished ? (
          <div className="space-y-4">
            <Card className="border border-cyan-300/60 bg-cyan-50/70">
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600" />
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">Interview Complete</p>
                    <p className="text-xs text-muted-foreground">
                      You practiced {questionCount} questions. Restart anytime.
                    </p>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">Correct</p>
                    <p className="text-lg font-bold text-foreground">
                      {correctCount}/{questionCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">Avg Score</p>
                    <p className="text-lg font-bold text-foreground">{averageScore}%</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">Progress</p>
                    <p className="text-lg font-bold text-foreground">{progressPercent}%</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className={cn(evaluationStatusMeta.correct.badgeClass)}>
                    Correct {correctCount}
                  </Badge>
                  <Badge className={cn(evaluationStatusMeta.partial.badgeClass)}>
                    Partial {partialCount}
                  </Badge>
                  <Badge className={cn(evaluationStatusMeta.wrong.badgeClass)}>
                    Wrong {wrongCount}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={restartInterview} size="sm">
                    Restart Interview
                  </Button>
                  <Badge className="bg-slate-100 text-slate-800">React specific</Badge>
                </div>
              </CardContent>
            </Card>
            {results.length > 0 && (
              <Card className="border border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-base font-bold text-foreground">
                    Last Answers Snapshot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-80 overflow-y-auto">
                  {results.map((result, index) => {
                    const statusMeta = evaluationStatusMeta[result.evaluation.status];
                    return (
                      <div
                        key={`${result.question}-${index}`}
                        className="rounded-lg border border-slate-200/80 px-4 py-3 transition hover:border-slate-400 bg-slate-50/70"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">
                            {index + 1}. {result.question}
                          </p>
                          <Badge className={cn(statusMeta.badgeClass)}>{statusMeta.label}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Score: {Math.round(result.evaluation.score * 100)}%
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-1">{statusMeta.description}</p>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <Card className="border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
              <CardContent>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Question</p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {currentIndex + 1}. {currentQuestion?.q}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {latestResultIndex >= 0
                    ? `Last feedback: ${latestEvaluation?.message}`
                    : 'Answer the question in the box below to see AI feedback.'}
                </p>
              </CardContent>
            </Card>

            <form onSubmit={handleSubmitAnswer} className="space-y-3">
              <textarea
                ref={textareaRef}
                className="w-full min-h-[120px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="Type your answer here..."
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                disabled={hasSubmittedCurrent}
              />
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  disabled={hasSubmittedCurrent || !answer.trim()}
                  className="rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Submit Answer
                </Button>
                {hasSubmittedCurrent && (
                  <Button
                    variant="secondary"
                    onClick={handleNextQuestion}
                    className="rounded-full px-5 py-2 text-xs font-semibold uppercase"
                  >
                    {currentIndex + 1 >= questionCount ? 'View Results' : 'Next Question'}
                  </Button>
                )}
                <Badge className="bg-slate-100 text-slate-700">React</Badge>
                <Badge className="bg-cyan-100 text-cyan-800">{progressPercent}% progress</Badge>
              </div>
            </form>
            {recentResults.length > 0 && (
              <Card className="border border-slate-200 bg-white/90">
                <CardHeader className="px-4 pt-4 pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center justify-between">
                    Recent Answers
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {answeredCount} completed
                    </span>
                  </CardTitle>
                  <p className="text-[11px] text-muted-foreground">
                    Status updates on the questions you just submitted.
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentResults.map((result, index) => {
                    const meta = evaluationStatusMeta[result.evaluation.status];
                    const questionNumber = recentOffset + index + 1;
                    return (
                      <div
                        key={`${result.question}-${questionNumber}`}
                        className="rounded-lg border border-slate-200/70 px-4 py-3 bg-slate-50/70 flex items-start justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {questionNumber}. {result.question}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-1">
                            Score: {Math.round(result.evaluation.score * 100)}%
                          </p>
                        </div>
                        <Badge className={cn(meta.badgeClass)}>{meta.label}</Badge>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {latestEvaluation && (
          <Card className="border border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                AI Feedback
                <span className="text-xs font-semibold text-muted-foreground">
                  Score: {Math.round(latestEvaluation.score * 100)}%
                </span>
                {latestStatusMeta && (
                  <Badge className={cn(latestStatusMeta.badgeClass, 'text-[10px]', 'py-1')}>
                    {latestStatusMeta.label}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm leading-relaxed text-muted-foreground">{latestEvaluation.message}</p>
              {latestEvaluation.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {latestEvaluation.keywords.slice(0, 6).map((keyword) => (
                    <Badge
                      key={keyword}
                      className="bg-white/80 text-slate-800 border border-slate-200"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs font-semibold text-muted-foreground"
                  onClick={() => setShowIdeal((prev) => !prev)}
                >
                  {showIdeal ? 'Hide' : 'Show'} Ideal Answer
                </Button>
              </div>
              {showIdeal && (
                <pre className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700">
                  {latestEvaluation.ideal}
                </pre>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
