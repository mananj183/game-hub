import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
    if (!url) {
        return noImage;
    }
    const optimized_image = url.replace(
        "/media/",
        "/media/crop/600/400/"
        );
    return optimized_image;
}

export default getCroppedImageUrl;