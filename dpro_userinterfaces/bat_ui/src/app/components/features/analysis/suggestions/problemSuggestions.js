
export default function ProblemSuggestions({problemsList}) {

    const problemsCount = problemsList.length;

    var content = <p>Content</p>;

    if(problemsCount < 1){
        content = <p className="m-[2.5%] text-black text-xl text-center text-bold">Look forward to suggestions and recommendations. </p>;
    }
    else {
        content = <p className="m-[2.5%] text-black text-xl text-center text-bold">Problem Suggestions: reduce the number of issues: { problemsCount } </p>;
    }

    return(
        <div>
            <div className="w-[full] m-[2.5%] flex items-center">
                <h3 className="text-black text-xl text-center text-bold"> Would you like to see a list of recommended problem areas for your business? </h3>
                <p className="text-black text-md text-center text-bold"> Research in large language models (LLMs) and artificial intelligence to provide conversational GenAI services with inferencing capabilities is being developed into productivity tools. </p>
            </div>
            { content }
        </div>
        
    );
}