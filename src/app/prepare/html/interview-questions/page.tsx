import HtmlInterviewQuestions from '@/components/languages/html/topics/html-interview-questions';
import { WebPlaygroundProvider } from '@/components/shared/playground/web-playground-context';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';

export default function PrepareHtmlInterviewQuestionsPage() {
  return (
    <WebPlaygroundProvider>
      <HtmlInterviewQuestions />
      <WebPlaygroundModal />
    </WebPlaygroundProvider>
  );
}
