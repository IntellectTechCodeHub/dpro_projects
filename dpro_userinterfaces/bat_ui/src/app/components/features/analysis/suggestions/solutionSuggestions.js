
export default function SolutionSuggestions({ solutionsList}) {

    const solutionsCount = solutionsList.length;

    var content;

    if(solutionsCount < 1){
        content = <p className="m-[2.5%] text-black text-xl text-center text-bold">Look forward to suggestions and recommendations.</p>;
    }
    else if (solutionsCount >= 1){
        content = <p className="m-[2.5%] text-black text-xl text-center text-bold">Solution Suggestions: reduce the number of issues: { solutionsCount } </p>;
    }

    return(
        <div>
            <div className="w-[full] m-[2.5%] flex items-center">
                <h3 className="text-black text-xl text-center text-bold"> Would you like to see a list of recommended solution areas for your business? </h3>
                <p className="text-black text-md text-center text-bold"> Research in large language models (LLMs) and artificial intelligence to provide conversational GenAI services with inferencing capabilities is being developed into productivity tools. </p>
            </div>
            { content }
        </div>
    );
}