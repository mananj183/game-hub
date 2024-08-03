const getCroppedImageUrl = (url: string) => {
    if (!url) {
        return '';
    }
    const optimized_image = url.replace(
        "/media/",
        "/media/crop/600/400/"
        );
    return optimized_image;
}

export default getCroppedImageUrl;