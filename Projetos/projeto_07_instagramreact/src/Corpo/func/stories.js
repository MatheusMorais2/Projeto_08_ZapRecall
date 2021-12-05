import Story from './story.js';
import Setinha from './setinha.js';

export default function Stories() {
    const data = [{src:"././assets/img/9gag.svg", text:"9gag"},
                {src:"././assets/img/meowed.svg", text:'meowed'},
                {src:"././assets/img/barked.svg", text:'barked' },
                {src:"././assets/img/nathanwpylestrangeplanet.svg", text:'nathanwpylestrangeplanet'},
                {src:"././assets/img/wawawicomics.svg", text:"wawawicomics"},
                {src:"././assets/img/respondeai.svg", text:"respondeai"},
                {src:"././assets/img/filomoderna.svg", text:"filomoderna"},
                {src:"././assets/img/memeriagourmet.svg", text:"memeriagourmet"},        
    ];
    return (
        <div className='stories'>
            {data.map( story => <Story banana={story}/>)}
            <Setinha/>
        </div>
    )
}
