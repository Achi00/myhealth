import { useGetIdentity, useList } from "@pankod/refine-core";
import { PostCard, CustomButton } from "components";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import "../index.css";
import { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { revealVariants, textRevealVariant } from "../assets/motion.js";
import { Loading } from "components";
import { HeaderImg } from "assets";
import { useNavigate } from "@pankod/refine-react-router-v6";

const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useList({
    resource: "posts",
    config: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const latestPosts = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Typography>Error</Typography>;

  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      color="#000"
      sx={{
        overflowX: "hidden",
        inset: "0px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* main banner */}
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "25%",
            userSelect: "none",
          }}
        >
          <Typography
            sx={{
              transform: "translate(25%, -50%)",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeColor: "#dee2e6",
              WebkitTextStrokeWidth: "3px",
            }}
            fontWeight="900"
            fontSize={{ lg: "15vmin", md: "12vmin", sm: "12min", xs: "10vmin" }}
            color="#ced4da"
          >
            MYHEALTH
          </Typography>
          <Typography
            sx={{
              transform: "translate(0%, -70%)",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeColor: "#dee2e6",
              WebkitTextStrokeWidth: "3px",
            }}
            fontWeight="900"
            fontSize={{
              lg: "15vmin",
              md: "12vmin",
              sm: "12vmin",
              xs: "10vmin",
            }}
            color="#ced4da"
          >
            MYHEALTH
          </Typography>
          <Typography
            sx={{
              transform: "translate(-25%, -70%)",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeColor: "#dee2e6",
              WebkitTextStrokeWidth: "3px",
            }}
            fontWeight="900"
            fontSize={{
              lg: "15vmin",
              md: "12vmin",
              sm: "12vmin",
              xs: "10vmin",
            }}
            color="#ced4da"
          >
            MYHEALTH
          </Typography>
        </Box>
        <Stack
          width="60%"
          height="800px"
          position="relative"
          left="0"
          top={{ lg: "0", md: "0%", sm: "5%", xs: "5%" }}
          display="flex"
          justifyContent={{
            lg: "space-between",
            md: "center",
            sm: "center",
            xs: "center",
          }}
          alignItems="center"
          flexDirection={{
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          }}
          zIndex="1"
        >
          <Stack direction="column">
            <Typography fontWeight="500" fontSize="2vmin">
              ORGANIC & PLANT-BASED
            </Typography>
            <Typography fontWeight="900" fontSize="4vmin">
              PERFORMANCE PROTEINS
            </Typography>
            <Typography
              fontWeight="300"
              fontSize="1.5vmin"
              width={{ lg: "400px", md: "350px", sm: "300px", xs: "250px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              minima nisi aliquid voluptas quas distinctio necessitatibus eos
              quidem dolore quia eum dignissimos expedita odit, ipsum veniam,
              vero omnis ad hic.
            </Typography>
            <CustomButton
              type="submit"
              title="More"
              handleClick={() => navigate("/posts")}
              backgroundColor="transparent"
              color="#000"
              height="70px"
              width="200px"
            />
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <img
              style={{
                position: "relative",
                width: "80%",
                height: "auto",
              }}
              src={HeaderImg}
              alt="optimum nutrution"
            />
          </Stack>
        </Stack>
      </Box>
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          component="div"
          mt={2.5}
          width={{ lg: "95%", md: "95%", sm: "90%", xs: "85%" }}
          margin={{ lg: "2vmin", md: "1vmin", sm: "0", xs: "0" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "25px",
          }}
        >
          {latestPosts.map((post) => (
            <PostCard
              key={post._id}
              id={post._id}
              description={post.description}
              productType={post.productType}
              title={post.title}
              photo={post.photo}
              photo2={post.photo2}
              price={post.price}
            />
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;
