import { GoogleGenAI } from "@google/genai";
import { createContext, useContext, useState } from "react";


const interviewContext = createContext();

export function InterviewProvider({children}){
    const [interviewQuestions, setinterviewQuestions] = useState([])
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [answer, setanswer] = useState([]);

    const fetchInterviewQuestions = async (interviewData)=>{

        console.log(interviewData)

        try {
            const ai = new GoogleGenAI({
                apiKey:import.meta.env.VITE_GEMINI_API_KEY
            });
            const prompt =  `
You are an expert technical interviewer conducting a professional interview.

Your task is to create a complete interview session for the candidate below.

CANDIDATE INFORMATION:
- Name: ${interviewData.name}
- Role: ${interviewData.role}
- Company: ${interviewData.company}
- Experience: ${interviewData.experience}
- Interview Type: ${interviewData.interviewType}
- Difficulty: ${interviewData.difficulty}
- Interview Duration: ${interviewData.duration}

RESUME:
${interviewData.resumeText}

INTERVIEW REQUIREMENTS:

1. Start the interview with a short, professional and friendly introduction.
2. Address the candidate by their name.
3. Mention the role they are interviewing for.
4. Briefly explain what the interview will cover.
5. Do not make the introduction too long.
6. After the introduction, generate interview questions.
7. Questions should match the candidate's experience, role, interview type, and difficulty.
8. Use information from the resume to create relevant questions about their projects, skills, and experience.
9. Include a suitable mixture of:
   - Technical questions
   - Role-specific questions
   - Resume/project-based questions
   - Conceptual questions
   - Practical/problem-solving questions
   - Behavioral questions when appropriate
10. The number of questions should be appropriate for the interview duration.
11. Do not provide answers.
12. Do not provide explanations or hints.
13. Do not add markdown.
14. Return ONLY valid JSON.

RETURN EXACTLY THIS STRUCTURE:

{
  "introduction": "Short professional introduction for the candidate.",
  "questions": [
    {
      "id": 1,
      "question": "First interview question"
    },
    {
      "id": 2,
      "question": "Second interview question"
    }
  ]
}
`;
        
            const response = await ai.models.generateContent({
                model:"gemini-2.5-flash",
                contents:prompt,
            })

                console.log(response.text)


        } catch (error) {
            console.log(error)
        }
    }



    return(
        <interviewContext.Provider
        value={{
            interviewQuestions,setinterviewQuestions,
            currentQuestion,setcurrentQuestion,
            answer,setanswer,fetchInterviewQuestions
        }}
        >
            {children}
        </interviewContext.Provider>
    )
}

export function useInterview(){
    return useContext(interviewContext)
}