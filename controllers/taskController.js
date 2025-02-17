//url params(url parameter)
export const demo1 =async(req,res)=>{
let name =req.params.name;
let age =req.params.age;
return res.json({name:name,age:age});
}

//query string
export const demo2 = async(req,res)=>{

let name =req.query.name;
let age = req.query.age;
return res.json({name:name,age:age});
}

//how to work with request body json
export const demo3 = async(req,res)=>{

}

//how to work with request form data file
export const demo4 = async(req,res)=>{

}

//request header properties
export const demo5 = async(req,res)=>{

}