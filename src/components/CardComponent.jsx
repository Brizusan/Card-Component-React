import React from "react";
import mobile from "../assets/images/image-product-mobile.jpg";
import desktop from "../assets/images/image-product-desktop.jpg";
import styled from "styled-components";
import styles from '../assets/styles/CardComponent.module.css'
import { FaShoppingCart } from "react-icons/fa";

const CardComponent = () => {
  const CARD = styled.div`
    width: calc(100% - 10%);
    margin-inline: auto;
    overflow: hidden;
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  `;

  const BUTTON = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;

    background-color: #3c8067;
    color: white;
    border-radius: 0.8rem;
    cursor: pointer;
  `


  return (
    <CARD className={styles.card}>
      <picture>
        <source srcSet={desktop} media="(min-width: 1120px)" />
        <img className="rounded-t-xl" src={mobile} alt="imagen referencial" />
      </picture>
      <section className="bg-white py-6 px-8 flex flex-col gap-4 laptop:gap-8 justify-center">
        <div>
          <p className="text-darkgrayblue text-xl font-monserrat uppercase tracking-widest">perfume</p>
          <h2 className="text-5xl capitalize py-4 text-verydarkblue">Gabrielle Essence eau de Parfum</h2>
          <p className="text-darkgrayblue font-monserrat font-medium">A floral, solar and voluptuos interpretation compose by
          olivire polge, perfumer-creatir for the house of chanel</p>
        </div>
        <div className="flex items-center gap-5 py-4">
          <p className="text-darkcyan text-5xl">$149.99</p>
          <p className="font-monserrat text-darkgrayblue line-through ">$169.99</p>
        </div>
        <BUTTON className="font-monserrat font-bold hover:opacity-80 ">
          <FaShoppingCart />
          Add to Cart
        </BUTTON>
      </section>
    </CARD>
  );
};

export default CardComponent;
