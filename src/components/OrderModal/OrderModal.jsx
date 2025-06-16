import styles from "./OrderModal.module.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { useCart } from "../../context/CartContext";
import { submitOrder } from "../../application/orderService";

const farthingCitiesMap = {
  Eastfarthing: ["Buckland", "Carrock", "Withywindle"],
  Westfarthing: ["Bywater", "Michel Delving", "Frogmorton"],
  Northfarthing: ["Hobbiton", "Tuckborough", "Whitwell"],
  Southfarthing: ["Fallowhill", "Merryhill", "Scary"],
};

export const orderSchema = z.object({
  farthings: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(["Eastfarthing", "Westfarthing", "Northfarthing", "Southfarthing"], {
      required_error: "Please select your Farthing",
    })
  ),
  city: z
    .string({ required_error: "Please select your settlement" })
    .min(1, "Please select your settlement")
    .nonempty("Please select your settlement"),
  house: z.string().max(10, "House should not contain more than 10 characters").nonempty("Please fill your house"),
  appartment: z.string().max(10, "Appartment should not contain more than 10 characters").optional(),
});

export default function OrderModal() {
  const { cartItems, orderIsOpened, closeOrderDetailsModal, clearCart, openResultModal } = useCart();

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
  });
  const farthings = watch("farthings");

  const onSubmit = (data) => {
    submitOrder(data, cartItems);
    clearCart();
    closeOrderDetailsModal();
    openResultModal();
  };

  useEffect(() => {
    resetField("city");
  }, [farthings, resetField]);

  const citiesOptions = farthings ? farthingCitiesMap[farthings] : [];

  if (!orderIsOpened) return null;
  return (
    <div className={styles.backdrop}>
      <form
        className={styles.modal}
        onSubmit={handleSubmit(onSubmit)}>
        <h2>Order Details</h2>
        <span>We deliver our goods all over the Shire!</span>
        <div className={styles.field}>
          <label htmlFor="">Farthings</label>
          <select
            {...register("farthings")}
            name="farthings"
            id="farthings">
            <option
              value=""
              hidden>
              Please select Farthing
            </option>
            <option value="Eastfarthing">Eastfarthing</option>
            <option value="Westfarthing">Westfarthing</option>
            <option value="Northfarthing">Northfarthing</option>
            <option value="Southfarthing">Southfarthing</option>
          </select>
          {errors.farthings && <p className={styles.error}>{errors.farthings.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="city">City/Village</label>
          <select
            {...register("city")}
            type="text"
            id="city"
            disabled={!farthings}>
            <option
              value=""
              hidden>
              Please select City
            </option>
            {citiesOptions.map((cityOption) => {
              return (
                <option
                  key={cityOption}
                  value={cityOption}>
                  {cityOption}
                </option>
              );
            })}
          </select>
          {errors.city && <p className={styles.error}>{errors.city.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="house">House</label>
          <input
            {...register("house")}
            type="text"
            name="house"
            id="house"
          />
          {errors.house && <p className={styles.error}>{errors.house.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="appartment">Appartment (if required)</label>
          <input
            {...register("appartment")}
            type="text"
            name="appartment"
            id="appartment"
          />
          {errors.appartment && <p className={styles.error}>{errors.appartment.message}</p>}
        </div>
        <div className={styles.buttonsBlock}>
          <button type="submit">Proceed To Checkout</button>
        </div>
        <button
          type="button"
          onClick={closeOrderDetailsModal}
          className={styles.buttonClose}>
          X
        </button>
      </form>
    </div>
  );
}
