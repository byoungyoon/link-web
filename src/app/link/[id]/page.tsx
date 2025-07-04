import DefaultAction from "@/app/link/[id]/_action/DefaultAction";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1>앱으로 이동 중...</h1>
      <DefaultAction id={id} />
    </div>
  );
}
