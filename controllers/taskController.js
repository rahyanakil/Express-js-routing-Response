export const createTask =async(req,res)=>{
    return res.json({message:"Task created Successfully"});
}
export const readTask =async (req,res)=>{
    return res.json({message: "Task read Successfully"});
}
export const updatedTask =async(req,res)=>{
    return res.json({message:"Task updated Successfully"})
}
export const deleteTask =async(req,res)=>{
    return res.json({
        message:"Task deleted successfully"
    })
}