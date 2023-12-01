import TansparencyCard from "@/app/components/TransparencyCard/TransparencyCard"

export default function Contact() {
    const newStyle = {
        backgroundColor: "red"
    }

    return (
        <div >
            <div className="p-3 text-center">
            <TansparencyCard title="Hi There" textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni inventore distinctio praesentium est officia sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni inventore distinctio praesentium est officia sit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni inventore distinctio praesentium est officia sit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni inventore distinctio praesentium est officia sit." bgOpacity={0.5} textOpacity={.75} />
            </div>
            <TansparencyCard textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni inventore distinctio praesentium est officia sit." bgOpacity={1}/>
            <h1 className="text-center">Contact</h1>
        </div>
    )
}
// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni inventore distinctio praesentium est officia sit.