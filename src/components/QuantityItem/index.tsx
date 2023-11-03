import { IconWrapper, QuantityItemContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface QuatityItemProps {
  size?: 'medium' | 'small';
  quantity: number;
  onIncrease: () => void;
  onDecrease:() => void;

}

export function QuatityItem({onIncrease, onDecrease, quantity, size = 'medium'}: QuatityItemProps ) {
  return(
    <QuantityItemContainer size= {size}>
      <IconWrapper disabled= {quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill"/>
      </IconWrapper>
      <input type="number" readOnly value={quantity}/>
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill"/>
      </IconWrapper>
    </QuantityItemContainer>
  )
}