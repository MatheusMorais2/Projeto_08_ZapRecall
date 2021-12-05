import Post from "./post";
export default function Posts() {
    const data = [
        {user:'meowed', userIcon:'assets/img/meowed.svg', content:'assets/img/gato-telefone.svg',
            likesIcon:'assets/img/respondeai.svg', likesUser:'respondeai', likesNumber:101.523 },
        {user:'barked', userIcon:'assets/img/barked.svg', content:'assets/img/dog.svg', 
            likesIcon:'assets/img/adorable_animals.svg', likesUser:'adorable_animals', likesNumber:99.159 }     
    ]
    return (
        <div className='posts'>
            {data.map( postData => <Post data={postData}/>)}
        </div>
    )
}