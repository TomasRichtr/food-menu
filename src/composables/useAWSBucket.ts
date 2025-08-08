export const useAWSBucket = (fileName: string) => {
  return `https://${process.env.AWS_BUCKET_URL}/${fileName}`;
};
