import Dictionary from "./dictionary";
import { Question } from "./questions";

export default interface TableData {
    questions: Question[];
    response: Dictionary<number>;

}