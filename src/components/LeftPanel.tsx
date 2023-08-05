import Header from './Header'
import Overview from './Overview'
const LeftPanel = () => {
    return (
        <div className="md:w-3/5 sm:h-screen p-5 flex flex-col">
            <Header />
            <Overview />
        </div>
    )
}
export default LeftPanel
