import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function SelectMoney() {
    const context = useContext(ShoppingCartContext)

    const handleOptionChange = (event) => {
        context.setSelectedOptionMoney(event.target.value);
}
        return (
            <select 
            value={context.selectedOptionMoney}
            onChange={handleOptionChange}
            className="bg-zinc-700 text-white px-2 py-1 rounded"
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="COP">COP</option>
                <option value="MXN">MXN</option>
            </select>
        )
    }

export default SelectMoney;