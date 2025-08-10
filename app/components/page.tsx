import Expandable from "@/components/explandable/expandable";
import styles from "./components.module.scss";
const ComponentsPage = ()=>{

    return (

        <div className={styles.page}>
           
           <div className="text-2xl">
             Following reusable components are available
           </div>
           <div>
            <label>Expanable component</label>
             <Expandable></Expandable>
            </div>
        </div>
    )
}

export default ComponentsPage;