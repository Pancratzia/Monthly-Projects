import { useUsers } from "../../hooks/useUsers";
import { useTranslation } from "react-i18next";

const UserForm = () => {
  const { t } = useTranslation("global");
  const { handleSubmit, error } = useUsers();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="name">
        {t("userPage.form.label")}
      </label>
      <div className="input-container">
        <input
          type="text"
          name="name"
          id="name"
          placeholder={t("userPage.form.placeholder")}
          className="input"
        />
        {error && <small className="error">{error}</small>}
      </div>
      <input className="submit" type="submit" value={t("userPage.form.button")} />
    </form>
  );
};

export default UserForm;
