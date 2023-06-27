import { ReactComponent as ClipboardMinusIcon } from 'bootstrap-icons/icons/clipboard-minus.svg';
import { ReactComponent as Cpu } from 'bootstrap-icons/icons/cpu.svg';
import { ReactComponent as HSquare } from 'bootstrap-icons/icons/h-square.svg';
import { ReactComponent as CartCheck } from 'bootstrap-icons/icons/cart-check.svg';

const styles = {
    width: "30",
    height: "16"
}
const Icons = (props: {iconsComponent:string}) => {
    const loadData = (props: string) => {
        let iconsComponent
        switch(props){
            case 'cpu':
                iconsComponent = <Cpu style={styles} />;
                break;
            case 'h-square':
                iconsComponent = <HSquare style={styles} />;
                break;
            case 'clipboard-minus-fill':
                iconsComponent = <ClipboardMinusIcon style={styles} />;
                break;
            case 'cart-check':
                iconsComponent = <CartCheck style={styles} />;
                break;
        }

        return iconsComponent;
        
        
    }

    return (
        <>
        
        {loadData(props.iconsComponent)}
        </>
    )
}



export default Icons;
