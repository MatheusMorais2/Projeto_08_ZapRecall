import Post from "./post";
export default function Posts() {
    const data = [
        {user:'meowed', userIcon:'assets/img/meowed.svg', content:'assets/img/gato-telefone.svg',
            likesIcon:'assets/img/respondeai.svg', likesUser:'respondeai', likesNumber:101.523,
            coments: [{cmntUser:'barked', cmntTxt:'<3' },
                      {cmntUser:'barked', cmntTxt:'lit'},
                      {cmntUser:'9gag', cmntTxt:'haha eu sou o 9gag eu sou engraçado'}] },
        {user:'barked', userIcon:'assets/img/barked.svg', content:'assets/img/dog.svg', 
            likesIcon:'assets/img/adorable_animals.svg', likesUser:'adorable_animals', likesNumber:99.159,
            coments: [{cmntUser:'meowed', cmntTxt:'que fofineo' },
                      {cmntUser:'filomoderna', cmntTxt:'haha nice'}] }     
    ]
    return (
        <div className='posts'>
            {data.map( postData => <Post data={postData}/>)}
        </div>
    )
}