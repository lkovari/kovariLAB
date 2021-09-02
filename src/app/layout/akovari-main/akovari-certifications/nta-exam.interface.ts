import { ExamResult } from "./exam-result.enum";

export interface INTAExams {
    date: Date;
    code: string;
    name: string;
    ocurrence: number;
    percent: number;
    result: ExamResult;
}
