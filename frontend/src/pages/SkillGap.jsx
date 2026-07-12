import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useResume } from "../context/ResumeContext";
import { getSkillGap } from "../services/api";


function SkillGap() {

  const {
    resumeText,
    targetRole,
    setTargetRole
  } = useResume();


  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);



  const handleAnalyze = async () => {

    if (!resumeText) {
      alert("Please upload your resume first.");
      return;
    }


    if (!targetRole) {
      alert("Please select a target role.");
      return;
    }


    try {

      setLoading(true);


      const data = await getSkillGap(
        resumeText,
        targetRole
      );


      setResult(data.skill_gap);


    } catch(error) {

      console.error(error);

      alert("Skill gap analysis failed.");

    }
    finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen bg-gray-50 py-20 px-6">


      <div className="mx-auto max-w-4xl">


        <h1 className="text-center text-4xl font-bold">
          Skill Gap Analysis
        </h1>


        <p className="mt-4 text-center text-gray-600">
          Find the skills required for your target career.
        </p>



        {/* Resume Status */}

        <div className="mt-8 rounded-xl bg-blue-50 p-4">

          <p className="font-medium text-blue-700">

          {
            resumeText
            ?
            "✅ Resume detected successfully."
            :
            "⚠️ No resume found. Please upload your resume first."
          }

          </p>

        </div>




        {/* Role Selection */}

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">


          <label className="font-semibold">
            Target Role
          </label>



          <select

            value={targetRole}

            onChange={(e)=>setTargetRole(e.target.value)}

            className="mt-3 w-full rounded-xl border border-gray-300 p-3"

          >


            <option value="">
              Select Role
            </option>


            <option>
              AI Engineer
            </option>


            <option>
              Machine Learning Engineer
            </option>


            <option>
              Data Scientist
            </option>


            <option>
              Backend Developer
            </option>


            <option>
              Frontend Developer
            </option>


            <option>
              Software Engineer
            </option>


            <option>
              DevOps Engineer
            </option>


          </select>




          <button

            onClick={handleAnalyze}

            disabled={loading}

            className="mt-6 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 disabled:opacity-60"

          >


          {
            loading

            ?

            (
              <span className="flex items-center gap-2">

                <Loader2 
                  className="animate-spin"
                  size={20}
                />

                Analyzing...

              </span>
            )

            :

            "Analyze Skill Gap"

          }


          </button>



        </div>


        {/* Result */}

        {
          result && (

            <div className="mt-8 rounded-2xl bg-white p-8 shadow">


              <h2 className="text-2xl font-bold">
                Skill Gap Report
              </h2>



              <div className="mt-5 whitespace-pre-wrap text-gray-700">

                {result}

              </div>


            </div>

          )
        }



      </div>


    </div>

  );

}


export default SkillGap;