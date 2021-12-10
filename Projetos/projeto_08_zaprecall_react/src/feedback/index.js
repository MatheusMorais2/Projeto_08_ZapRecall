export default function Feedback() {
    const buttons = [{ txt: 'Aprendi agora', color:'#000000'},
        { txt: 'Não lembrei', color:'#F64848'},
        { txt: 'Lembrei com esforço', color:'#62DB38'},
        { txt: 'Zap!', color:'#FFEF61'}];
    return (
        <>
            {buttons.map((elem)=> <button>{elem.txt}</button>)}
        </>
    )
}