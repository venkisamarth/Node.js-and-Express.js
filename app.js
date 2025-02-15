// // const {readFileSync,writeFileSync, write, writeFile}=require("fs")
// // console.log('start')
// // const first =readFilSynce('./content/first.txt','utf')
// // const second =readFileSync('./content/second.txt','utf8')

// // // writeFileSync(
// // //   './content/result-sync.txt',
// // //   'Here is the result :${first},${second},{flag:a'}
// // // )
// // writeFileSync(
// //   './content/result-async.txt',
// //   `Here is the result :${first},${second}`,
// //   {flag:'a'}
// // )

// // console.log('done with taks ')
// // console.log('starting the next one ')
// const {readFile,writeFile}=require('fs')
// console.log('start')
// readFile('./content/first.txt','utf-8',(err,result)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   const first =result
//   readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//       console.log(err)
//       return
//     }
//     const second=result
//     writeFile('./content/result-async.txt',`Here is the result:${first},${second}`,
//       (err,result)=>{
//         if(err){
//           console.log(err)
//           return
//         }
//         const  second=result
       
//       }
//     )
//   })
})