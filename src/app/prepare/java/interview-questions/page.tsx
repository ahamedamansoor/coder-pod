import JavaInterviewQuestions from '@/components/languages/java/topics/java-interview-questions';
import { WebPlaygroundProvider } from '@/components/shared/playground/web-playground-context';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';

export default function PrepareJavaInterviewQuestionsPage() {
  return (
    <WebPlaygroundProvider>
      <JavaInterviewQuestions />
      <WebPlaygroundModal />
    </WebPlaygroundProvider>
  );
}
