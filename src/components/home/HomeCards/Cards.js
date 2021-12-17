import React from "react";
import {     Card,
    Grid,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Button,
    Typography,
    Avatar,
    Box, } from "@material-ui/core";
import dummyData from "./apps";
import CardDialog from "./CardDialog";


const Cards = () => {
    return (
        <Box sx={{ display: "flex", margin: 5 }}>
            <Grid container>
                {dummyData?.map((item) => (
                    <>
                        <Grid item xs={3}>
                            <Card
                                data-testid="card"
                                key={item.id}
                                sx={{ maxWidth: 350, borderRadius: "4%", margin: 3 }}
                            >
                                <CardHeader
                                    data-testid="title"
                                    avatar={
                                        <Avatar data-testid="avatar" sx={{ bgcolor: "red" }} aria-label="recipe">
                                            <img src={item.image} alt={item.name.slice(0, 2)} />
                                        </Avatar>
                                    }
                                    titleTypographyProps={{ variant: "h6" }}
                                    title={item.name}
                                    subheader={`Updated at: ${item.updatedAt}`}
                                />
                                <CardMedia
                                    component="img"
                                    data-testid="image"
                                    height="194"
                                    image={item.image}
                                    alt="application"
                                />
                                <CardContent>
                                    <Typography data-testid="description" variant="body2" sx={{ width: "100%" }}>
                                        <CardDialog description={item.description} />
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Button size="small">Open</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </>
                ))}
            </Grid>
        </Box>
    );
};

export default Cards;