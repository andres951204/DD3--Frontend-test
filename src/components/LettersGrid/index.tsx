
import { useWords } from '../../hooks/WordsHook';
import LettersBox from '../LettersBox'



export default function LettersGrid() {

    const { words } = useWords()


    return <div className="mt-5">
        {words.map((word, key) => (
            <div key={key} className='mt-3'>
                <LettersBox word={word} />
            </div>
        ))}
    </div>;
}
