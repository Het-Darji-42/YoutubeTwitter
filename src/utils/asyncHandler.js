// Code 1 : (Most Of Used)  SMALL AND HARD

const asyncHandler = (requestHandler) =>{
    	(req ,res , next)=>{
            Promise.resolve(requestHandler(req ,res , next)).catch((err)=>{next(err)})
        }

        // chat GPT said :===>
        // const asyncHandler = (requestHandler) => (req, res, next) => {
        //         Promise.resolve(requestHandler(req, res, next)).catch(next); // Pass the error to the next middleware directly
        //     };
}
export {asyncHandler}


//  CODE 2 : ((LONG + TOO HARD))

// // const asyncHandler = () => { async() => {} }   // Short Way OF THIS ==>
//     const asyncHandler = (fn) => async(req , res , next ) =>{
//         try {
//             await fn(req , res , next)
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message 
//             })
//         }
//     }
// export {asyncHandler}