import { ExamResult } from "./exam-result.enum";
import { INTAExams } from "./nta-exam.interface";

export class NTAExam implements INTAExams {
    date: Date;
    code: string;
    name: string;
    ocurrence: number;
    percent: number;
    result: ExamResult;    
}
