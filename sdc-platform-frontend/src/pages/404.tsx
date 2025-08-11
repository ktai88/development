import Layout from "src/components/Layout.tsx";
import { NotFound, Typography } from "@astron-sdc/design-system";
import { NavLink } from "react-router-dom";

const Custom404 = () => (
  <Layout title="">
    <NotFound
      title={"Page not found"}
      content={
        <>
          <Typography text="Sorry, the page you're looking for doesn't exist (anymore)." variant="paragraph" />
          <NavLink to="/">
            <Typography text="Back to home" variant="paragraph" customColor={true} customClass="text-primary underline" />
          </NavLink>
        </>
      }
    />
  </Layout>
);

export default Custom404;
