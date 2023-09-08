import lang from "../utils/languageconstants"
import { useSelector} from 'react-redux'
const GPTSearchBar = () => {
  
  const userlangkey=useSelector(store=>store.lang.defaultlang)
  
  return (
    <div className='pt-28'>
      <form className='bg-black w-1/2 grid grid-cols-12 mx-auto rounded-md'>
          <input type='text' placeholder={lang[userlangkey].gptSearchPlaceholder} 
          className='col-span-10 px-2 m-3 py-2 rounded-md'/>
          <button className='bg-red-500 col-span-2 m-3 py-2 rounded-md'>{lang[userlangkey].search}</button>

      </form>
    </div>
  )
}

export default GPTSearchBar
