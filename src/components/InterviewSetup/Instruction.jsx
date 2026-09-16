import React from 'react'

function Instruction() {
  return (
     <div>

                <label className="mb-2 block text-gray-300">
                  Additional Instructions
                </label>

                <div className="rounded-xl border border-[#2C3556] bg-[#181D30] p-4">

                  <div className="flex items-start gap-3">

                    <MessageSquareText
                      size={18}
                      className="text-gray-400 mt-1"
                    />

                    <textarea
                      rows={5}
                      maxLength={300}
                      placeholder="Example: Focus more on React Hooks, JavaScript, REST APIs and state management..."
                      {...register("instructions")}
                      className="w-full resize-none bg-transparent outline-none"
                    />

                  </div>

                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Optional notes for AI to personalize your interview.
                </p>

              </div>
  )
}

export default Instruction
