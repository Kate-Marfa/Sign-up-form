import homeownerIconDefault from "./home-work-default.svg";
import homeownerIconBlue from "./home-work-blue.svg";
import professionalIconDefault from "./business-center-default.svg";
import professionalIconBlue from "./business-center-blue.svg";

function RoleSelector({ formData, handleNext, setFormData }) {
  const selectorRole = formData.role;

  const roles = [
    {
      id: "homeowner",
      title: "Homeowner",
      description: "I am a homeowner or interesed in home design.",
      icon: {
        default: homeownerIconDefault,
        selected: homeownerIconBlue,
      },
    },
    {
      id: "professional",
      title: "Professional",
      description: "I offer home improvement services or sell home products.",
      icon: {
        default: professionalIconDefault,
        selected: professionalIconBlue,
      },
    },
  ];

  return (
    <div className="role-selector">
      <h2>Which describes you best?</h2>
      <div className="role-list">
        {roles.map((role) => {
          const isSelected = selectorRole === role.id;
          const iconSrc = isSelected ? role.icon.selected : role.icon.default;

          return (
            <div
              key={role.id}
              className={`role-card ${isSelected ? "selected" : ""}`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, role: role.id }))
              }
            >
              <img src={iconSrc} alt="" />
              <div>
                <strong>{role.title}</strong>
                <p>{role.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoleSelector;
