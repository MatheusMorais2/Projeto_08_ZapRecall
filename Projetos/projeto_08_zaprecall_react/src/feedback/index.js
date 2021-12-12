import './style.css'

export default function Feedback({nextCard}) {
    const buttons = [{ txt: `Aprendi agora`, color:'#000000'},
        { txt: `Não lembrei`, color:'#F64848'},
        { txt: `Lembrei com esforço`, color:'#62DB38'},
        { txt: `Zap!`, color:'#FFEF61'}];
    return (
        <div className="buttons">
            {buttons.map((elem) => <button onClick={nextCard} style={{ border: `3px solid ${elem.color}`, borderRadius: '12px' }}>
                                        <span>{elem.txt}</span>
                                    </button>)}
        </div>
    )
}