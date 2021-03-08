//import hooks
import {useState, useEffect} from 'react';

const useFetch = (url) => {

    //States 
        //data
    const [data , setData ] = useState(null)

        //Error Message
    const [error , setError] = useState(null)

        //Loading Message
    const [isLoading , setisLoading ] = useState(true)
      

    //fetch data 
    useEffect(() => {

        //stop fetch
        const abortCont = new AbortController();

        //tip: "url" parameter is useFetch parameter
        //associate AbortController with fetch()
        fetch(url, {signal: abortCont.signal})

        //get Response
        .then(res => {

            //throw Error
                if (!res.ok) {
                throw Error('متاسفانه چنین مطلبی پیدا نشد')
            }

            //response should be Json format
           return res.json()

        })
            
        .then(data => {
            // set data ,dont show any message's
            setError(null)
            setisLoading(false)
            setData(data)
            
        })
        .catch(err => {
            
            if (err.name === 'AbortError') {

                console.log('fetch Aborted!');

            }else {

            //don't show loading message , show error message only
            setisLoading(false)
            setError(err.message)
            }

        })

        return () => abortCont.abort()
        
        //rerender only when url is changed
    },[url])
    
    return { data , error , isLoading }
}

export default useFetch;