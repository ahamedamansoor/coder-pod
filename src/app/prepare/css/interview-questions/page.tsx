import CssInterviewQuestions from '@/components/languages/css/topics/css-interview-questions';
import { WebPlaygroundProvider } from '@/components/shared/playground/web-playground-context';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';

export default function CssInterviewQuestionsPage() {
  return (
    <WebPlaygroundProvider>
      <CssInterviewQuestions />
      <WebPlaygroundModal />
    </WebPlaygroundProvider>
  );
}
