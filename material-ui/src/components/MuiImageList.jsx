import { ImageList, ImageListItem, Stack, ImageListItemBar } from "@mui/material"

export const MuiImageList = ()=> {
    return(
        <Stack spacing={4}>
            <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                {
                    itemData.map((item)=>(
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}`} alt={item.title} loading="lazy"/>
                            <ImageListItemBar title={item.title} subtitle={'hello'}/>
                        </ImageListItem>
                        
                         
                    ))
                }
            </ImageList>

            <ImageList variant="woven" sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                {
                    itemData.map((item)=>(
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}`} alt={item.title} loading="lazy"/>
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </Stack>
    )
}

const itemData = [
    {
        img: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        title: 'Laptop'
    },
    {
        img: 'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ',
        title: 'Area'
    },
    {
        img: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
        title: 'Beach'
    },
    {
        img: 'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
        title: 'Water Fall'
    },
    {
        img: 'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU',
        title: 'Mountains'
    },
    {
        img: 'https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI',
        title: 'Bridze'
    },
    {
        img: 'https://fastly.picsum.photos/id/45/4592/2576.jpg?hmac=Vc7_kMYufvy96FxocZ1Zx6DR1PNsNQXF4XUw1mZ2dlc',
        title: 'Auto'
    },
    {
        img: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ',
        title: 'Street'
    },
    {
        img: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ',
        title: 'Street'
    },
    {
        img: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ',
        title: 'Street'
    },
    {
        img: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ',
        title: 'Street'
    },
    {
        img: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
        title: 'Beach'
    },
    {
        img: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
        title: 'Beach'
    },
]