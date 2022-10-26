import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc.toUpperCase(0)}</C.Td>
      <C.Td>R${item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash cursor="pointer" onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;