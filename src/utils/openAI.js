import OpenAI from 'openai';
import { Open_Ai_Key } from './constants';

const openai = new OpenAI({
  apiKey: Open_Ai_Key, 
  dangerouslyAllowBrowser: true
});
export default openai
