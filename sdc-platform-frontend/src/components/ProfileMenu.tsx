import { Button, IconName, ProfileDropdown, Toggle, Typography } from "@astron-sdc/design-system";
import { useContext } from "react";
import { AuthContext } from "src/auth/AuthContext";
import { ThemeContext } from "src/components/Theme/Context";
import { BACKEND_BASENAME } from "src/constants";

const ProfileMenu = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);
  const { authenticated, user, permissions, login, logout, restartSession } = useContext(AuthContext);

  const menu = [
    {
      sectionKey: "Main",
      sectionContent: [
        {
          key: "darkmode-toggle",
          icon: "Eye" as IconName,
          content: (
            <Toggle
              isSelected={darkmode}
              setIsSelected={setDarkmode}
              label="Dark mode"
              labelPlacement="left"
              wrapperClass="justify-between w-full"
            />
          ),
        },
      ],
    },
    {
      sectionKey: "Refresh Token",
      sectionContent: [
        {
          key: "refresh",
          icon: "InfoCircle" as IconName,
          content: <button onClick={restartSession}>Refresh Token</button>,
          customClass: "text-warning",
        },
      ],
    },
    {
      sectionKey: "Logout",
      sectionContent: [
        {
          key: "logout",
          icon: "Cross" as IconName,
          content: <button onClick={logout}>Logout</button>,
          customClass: "text-danger",
        },
      ],
    },
    {
      sectionKey: "Info",
      sectionContent: [
        {
          key: "info",
          content: (
            <div className="flex flex-col gap-2">
              <Typography variant="note" text="Entitlements:" />
              <Typography variant="paragraph" text={user?.eduperson_entitlement} />
              <Button
                label="Go to userinfo"
                onClick={() => {
                  window.location.assign(`${BACKEND_BASENAME}/api/v1/userinfo`);
                }}
              />
              {permissions && (
                <>
                  <Typography variant="note" text="access-allowed:" />
                  <Typography variant="paragraph" text={`is_admin: ${String(permissions?.is_admin)}`} />
                </>
              )}
            </div>
          ),
          customClass: "text-danger",
        },
      ],
    },
  ];

  if (authenticated && user) {
    return <ProfileDropdown label={user.name} color="primary" menu={menu} />;
  }

  return (
    <div>
      <Button
        onClick={() => {
          login();
        }}
        label="Login"
      />
    </div>
  );
};
export default ProfileMenu;
