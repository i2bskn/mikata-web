import type { FC, ReactNode } from "react";

export type PageWithSidebarTemplateProps = {
  /** 2 カラムの上に置く全幅スロット（SearchPanel など） */
  topSlot?: ReactNode;
  /** 2 カラム左の Sidebar */
  sidebarSlot: ReactNode;
  /** 2 カラム右のメイン領域 */
  mainSlot: ReactNode;
  /** メイン下に追加表示する全幅スロット（ConditionSearch / RelatedSitesGrid 等） */
  bottomSectionsSlot?: ReactNode;
};

export const PageWithSidebarTemplate: FC<PageWithSidebarTemplateProps> = ({
  topSlot,
  sidebarSlot,
  mainSlot,
  bottomSectionsSlot,
}) => {
  return (
    <>
      {topSlot}

      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 5px" }}>
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          {sidebarSlot}

          <div className="flex-1 min-w-0">
            {mainSlot}
            {bottomSectionsSlot}
          </div>
        </div>
      </div>
    </>
  );
};
