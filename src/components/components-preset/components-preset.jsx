import styles from "./components-preset.module.css";
import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import { preset1, preset2, preset3 } from "../../utils/preset";

export default function ComponentsPreset() {
  const { appDispatch } = useContext(AppContext);

  const setPresetHandler = (data) => {
    appDispatch({ type: "setPreset", payload: data });
  };

  return (
    <ul className={styles.list}>
      <li
        className={`${styles.item} text text_type_main-default text_color_inactive`}
        onClick={(e) => {
          setPresetHandler(preset1);
        }}
      >
        Пресет 1
      </li>
      <li
        className={`${styles.item} text text_type_main-default text_color_inactive`}
        onClick={(e) => {
          setPresetHandler(preset2);
        }}
      >
        Пресет 2
      </li>
      <li
        className={`${styles.item} text text_type_main-default text_color_inactive`}
        onClick={(e) => {
          setPresetHandler(preset3);
        }}
      >
        Пресет 3
      </li>
    </ul>
  );
}

// У данного компонента нет пропсов, методы приходят со Store
