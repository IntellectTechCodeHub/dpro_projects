const ProcessDiagram = (nodesObj) => {

    const processNodes = nodesObj.nodes ? nodesObj.nodes : [{ process: <div></div>, action: <div></div> }];

    if(processNodes === undefined){
        throw new Error('process nodes is undefined.');
    }

    let processDiagramElement = (processNode, actionNode) => {
        return(
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                { processNode }
                { actionNode }
            </div>
        );
    }

    let process = <div></div>;
    const processElements = processNodes.map( node => processDiagramElement(node.process, node.action));
    process = 
        <div className='w-full flex'>
            { processElements }
        </div>;

    return(
        <div className='w-full h-auto flex items-center justify-center'>
            <p className='text-lg text-black text-center'> Process Diagram </p>
            { process }
        </div>
    );
}
export default ProcessDiagram;