const Key = ({ character, wide = false, onClick }: KeyboardKeyInterface): JSX.Element => {

    return <>
        <div onClick={(e) => onClick(e)} className={`h-12 ${wide ? 'w-[71px] text-base' : 'w-11 text-lg'} mr-2 bg-keyboard-clean 
    flex justify-center items-center rounded-md  font-semibold 
    text-keyboard-character cursor-pointer hover:outline hover:outline-2`}>
            {character}
        </div>
    </>
}

export default function Keyboard() {

    return <div className="flex justify-center mt-14 bg-gray-100 pl-5 pt-8 pb-9 rounded-2xl w-full max-w-[638px]">
        <div>
            <div className="flex w-full max-w-xl pl-8">
                <Key character="Q" onClick={(e: Event) => console.log(e)} />
                <Key character="W" />
                <Key character="E" />
                <Key character="R" />
                <Key character="T" />
                <Key character="Y" />
                <Key character="U" />
                <Key character="I" />
                <Key character="O" />
                <Key character="P" />
            </div>
            <div className="flex w-full max-w-xl mt-2 pl-12">
                <Key character="A" />
                <Key character="S" />
                <Key character="D" />
                <Key character="F" />
                <Key character="G" />
                <Key character="H" />
                <Key character="J" />
                <Key character="K" />
                <Key character="L" />
                <Key character="Ñ" />

            </div>
            <div className="flex w-full max-w-xl mt-2">
                <Key character="ENTER" wide />
                <Key character="Z" />
                <Key character="X" />
                <Key character="C" />
                <Key character="V" />
                <Key character="B" />
                <Key character="N" />
                <Key character="M" />
                <Key character={<img src="/delete-icon.png" />} wide />
            </div>
        </div>
    </div>
}