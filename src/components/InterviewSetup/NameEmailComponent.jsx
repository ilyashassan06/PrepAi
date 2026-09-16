import React from 'react'

function NameEmailComponent() {
  return (
    <div className="grid md:grid-cols-2 gap-6">

                {/* Name */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Your Name
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <User size={18} className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      className="w-full bg-transparent px-3 py-4 outline-none"
                    />

                  </div>

                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}

                </div>

                  <div>

                  <label className="block mb-2 text-gray-300">
                    Interview Role
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <BriefcaseBusiness
                      size={18}
                      className="text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Frontend Developer"
                      {...register("role", {
                        required: "Role is required",
                      })}
                      className="w-full bg-transparent px-3 py-4 outline-none"
                    />

                  </div>

                  {errors.role && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.role.message}
                    </p>
                  )}

                </div>
                

              </div>
  )
}

export default NameEmailComponent
