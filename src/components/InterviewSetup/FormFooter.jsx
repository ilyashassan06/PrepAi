import React from 'react'

function FormFooter() {
  return (
    <div className="rounded-2xl border border-[#2C3556] bg-[#181D30] p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15">
                    🎤
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Before You Start
                    </h3>

                    <ul className="mt-2 space-y-2 text-sm text-gray-400">

                      <li>• Make sure your microphone is working.</li>

                      <li>• Sit in a quiet environment.</li>

                      <li>• Speak naturally like a real interview.</li>

                      <li>• Don't worry if you make mistakes—the AI is here to help you improve.</li>

                    </ul>

                  </div>

                </div>

              </div>
  )
}

export default FormFooter
