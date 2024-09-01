import React from "react";

type Props<T extends object, K extends keyof T> = {
  data: T;
  properties: K;
};

const Summary = <T extends object, K extends keyof T>({
  data,
  properties,
}: Props<T, K>) => {
  const value = data[properties] as string;
  return (
    <div>
      <p>{value}</p>
    </div>
  );
};

export default Summary;
