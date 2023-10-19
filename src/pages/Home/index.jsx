
import ToDoApp from '@/components/to-do/To-do.jsx'
import bgImg from '@/assets/list-background.jpg'
const Home = () => {
  return(
    <>
    <div  style={{
        backgroundImage: `url('${bgImg.src}')`,
        width: '100%',
        height: '100%',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover'
      }}>
    <ToDoApp/>

    </div>
    </>
  )
}

export default Home