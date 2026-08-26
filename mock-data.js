const hedyPrototypeData = {
  meta: {
    version: "phase-1-2026-08-26",
    locale: "vi-VN",
    currency: "VND",
    prototypeOnly: true,
    disclosure: "Dữ liệu sản phẩm, giá, tồn kho, giao hàng, thanh toán và dự án trong bản mẫu này chỉ dùng để đánh giá giao diện; chưa phải cam kết bán hàng của HEDY.",
    approvedInputs: [
      "D-19: Đặt riêng và doanh nghiệp là hành trình chính; bán lẻ là hành trình thứ hai.",
      "D-20: Zalo và Instagram có quyền truy cập ngang nhau; điểm đến và thời gian phản hồi chưa cấu hình."
    ]
  },
  reviewContract: {
    sources: ["home", "nav", "shop", "collection", "search", "product", "cart", "checkout", "case", "story", "policy", "recovery"],
    routeStateGroups: {
      "index.html": "home",
      "shop.html": "shop",
      "custom.html": "custom",
      "collection.html": "collection",
      "search.html": "search",
      "product.html": "product",
      "cart.html": "cart",
      "checkout.html": "checkout",
      "confirmation.html": "confirmation",
      "contact.html": "contact",
      "story.html": "story"
    }
  },
  collections: {
    "ban-an": {
      id: "ban-an",
      label: "Cho bàn ăn",
      shortDescription: "Những món dùng trong bữa ăn và khoảng nghỉ hằng ngày.",
      truthStatus: "illustrative"
    },
    "qua-tang": {
      id: "qua-tang",
      label: "Quà tặng",
      shortDescription: "Các fixture quà tặng bán lẻ; quy cách đóng gói thật vẫn đang chờ HEDY xác nhận.",
      truthStatus: "illustrative"
    },
    "goc-nha": {
      id: "goc-nha",
      label: "Cho góc nhà",
      shortDescription: "Bình và vật nhỏ cho không gian sống.",
      truthStatus: "illustrative"
    }
  },
  contentEntries: {
    "story-craft-limited": {
      id: "story-craft-limited",
      route: "story.html",
      title: "Chất liệu, cách dùng và điều còn chờ xác nhận",
      excerpt: "Một nội dung nền giúp người xem hiểu cách HEDY sẽ trình bày chất liệu, chăm sóc và biến thiên sau khi có dữ liệu được duyệt.",
      contentType: "evergreen-story",
      truthStatus: "limited-content",
      customerFacing: true,
      publishableClaims: [],
      limitedFallback: "Chưa có dữ liệu nguồn gốc, người làm hoặc quy trình được phép công bố; nội dung hiện tại chỉ giải thích phạm vi thông tin sẽ được bổ sung.",
      relatedRoutes: ["custom.html?source=story", "shop.html"]
    }
  },
  assets: {
    img1: {
      path: "materials/img1.jpg",
      source: "supplied-repository-asset",
      width: 1080,
      height: 1620,
      aspectRatio: "2:3",
      focalPoint: "50% 58%",
      allowedCrops: ["2:3", "4:5", "1:1-centered"],
      altIntent: "Hai chén, hai đĩa nhỏ và đũa trên khay gỗ, phía sau là hộp quà xanh.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "restricted-third-party",
      visibleIdentity: "SAKUZAN"
    },
    img2: {
      path: "materials/img2.jpg",
      source: "supplied-repository-asset",
      width: 714,
      height: 714,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5-mild"],
      altIntent: "Hộp quà mở với đồ gốm, chai nhỏ, gói bọc đen và cành bạch đàn.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "restricted-third-party",
      visibleIdentity: "unreadable branded tag"
    },
    img3: {
      path: "materials/img3.jpg",
      source: "supplied-repository-asset",
      width: 1125,
      height: 1500,
      aspectRatio: "3:4",
      focalPoint: "51% 58%",
      allowedCrops: ["3:4", "4:5", "1:1-moderate"],
      altIntent: "Bình gốm màu kem cắm hoa vàng cạnh ống đựng sản phẩm.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "restricted-third-party",
      visibleIdentity: "ZUIKOU"
    },
    img4: {
      path: "materials/img4.jpg",
      source: "supplied-repository-asset",
      width: 3376,
      height: 3376,
      aspectRatio: "1:1",
      focalPoint: "55% 54%",
      allowedCrops: ["1:1", "4:5", "4:3"],
      altIntent: "Hộp quà xanh mở với vật gốm trắng và bó hoa khô.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "prototype-only",
      visibleIdentity: null
    },
    img5: {
      path: "materials/img5.jpg",
      source: "supplied-repository-asset",
      width: 940,
      height: 1175,
      aspectRatio: "4:5",
      focalPoint: "52% 47%",
      allowedCrops: ["4:5", "1:1"],
      altIntent: "Đĩa, cốc và bát gốm màu kem trong hai hộp quà.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "prototype-only",
      visibleIdentity: null
    },
    img6: {
      path: "materials/img6.jpg",
      source: "supplied-repository-asset",
      width: 1200,
      height: 900,
      aspectRatio: "4:3",
      focalPoint: "50% 50%",
      allowedCrops: ["4:3"],
      altIntent: "Hai hộp quà gốm nhìn từ trên xuống, một hộp buộc dây đỏ.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "restricted-third-party",
      visibleIdentity: "HASAMI PORCELAIN"
    },
    img7: {
      path: "materials/img7.jpg",
      source: "supplied-repository-asset",
      width: 800,
      height: 800,
      aspectRatio: "1:1",
      focalPoint: "50% 52%",
      allowedCrops: ["1:1", "4:5-mild", "4:3-mild"],
      altIntent: "Bộ tách đĩa hoa văn trước hộp giấy kraft đang được cầm bằng hai tay.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "restricted-third-party",
      visibleIdentity: "Japanese packaging; model release unverified"
    },
    img8: {
      path: "materials/img8.jpg",
      source: "supplied-repository-asset",
      width: 1000,
      height: 1000,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5-mild", "3:4-mild"],
      altIntent: "Bốn món gốm màu xám nhạt và hai thìa gỗ trong hộp trắng.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "unverified",
      customerUse: "prototype-only",
      visibleIdentity: null
    },
    logo: {
      path: "materials/logo.jpg",
      source: "supplied-repository-asset",
      width: 1254,
      height: 1254,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1-contain", "header-monogram-established"],
      altIntent: "HEDY ATELIER — Trang chủ.",
      failureFallback: "text-wordmark",
      rightsStatus: "working-brand-asset",
      customerUse: "prototype-brand",
      visibleIdentity: "HEDY ATELIER"
    },
    palette: {
      path: "materials/palatte.jpg",
      source: "supplied-repository-asset",
      width: 1536,
      height: 1024,
      aspectRatio: "3:2",
      focalPoint: "50% 50%",
      allowedCrops: ["3:2-full"],
      altIntent: "Bảng tham chiếu màu và không khí thương hiệu HEDY ATELIER dùng nội bộ.",
      failureFallback: "not-customer-facing",
      rightsStatus: "unverified-reference",
      customerUse: "internal-reference-only",
      visibleIdentity: "HEDY ATELIER moodboard"
    },
    "missing-product-primary": {
      path: null,
      source: "logical-placeholder",
      width: null,
      height: null,
      aspectRatio: "4:5",
      focalPoint: null,
      allowedCrops: ["4:5", "1:1"],
      altIntent: "Ảnh chính của sản phẩm đang được cập nhật.",
      failureFallback: "text-in-placeholder",
      rightsStatus: "missing",
      customerUse: "quiet-ritual-placeholder",
      visibleIdentity: null
    },
    "missing-multi-dat": {
      path: null,
      source: "logical-placeholder",
      width: null,
      height: null,
      aspectRatio: "1:1",
      focalPoint: null,
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Ảnh phiên bản men Đất đang được cập nhật.",
      failureFallback: "text-in-placeholder",
      rightsStatus: "missing",
      customerUse: "quiet-ritual-placeholder",
      visibleIdentity: null
    },
    "missing-enquiry-only": {
      path: null,
      source: "logical-placeholder",
      width: null,
      height: null,
      aspectRatio: "4:5",
      focalPoint: null,
      allowedCrops: ["4:5", "1:1"],
      altIntent: "Nội dung hình ảnh cho yêu cầu tư vấn đang chờ bằng chứng được duyệt.",
      failureFallback: "limited-content-message",
      rightsStatus: "missing",
      customerUse: "limited-content-placeholder",
      visibleIdentity: null
    },
    "missing-product-detail": {
      path: null,
      source: "logical-placeholder",
      width: null,
      height: null,
      aspectRatio: "1:1",
      focalPoint: null,
      allowedCrops: ["1:1"],
      altIntent: "Ảnh cận cảnh sản phẩm đang được cập nhật.",
      failureFallback: "text-in-placeholder",
      rightsStatus: "missing",
      customerUse: "quiet-ritual-placeholder",
      visibleIdentity: null
    },
    "missing-product-scale": {
      path: null,
      source: "logical-placeholder",
      width: null,
      height: null,
      aspectRatio: "4:5",
      focalPoint: null,
      allowedCrops: ["4:5"],
      altIntent: "Ảnh thể hiện tỷ lệ sản phẩm đang được cập nhật.",
      failureFallback: "text-in-placeholder",
      rightsStatus: "missing",
      customerUse: "quiet-ritual-placeholder",
      visibleIdentity: null
    },
    "missing-product-context": {
      path: null,
      source: "logical-placeholder",
      width: null,
      height: null,
      aspectRatio: "3:2",
      focalPoint: null,
      allowedCrops: ["3:2", "4:3"],
      altIntent: "Ảnh sản phẩm trong bối cảnh đang được cập nhật.",
      failureFallback: "text-in-placeholder",
      rightsStatus: "missing",
      customerUse: "quiet-ritual-placeholder",
      visibleIdentity: null
    }
  },
  products: {
    "simple-in-stock": {
      fixtureId: "simple-in-stock",
      slug: "dia-la-nho",
      truthStatus: "illustrative",
      fixturePurpose: "Sản phẩm còn hàng, một phiên bản.",
      name: {
        short: "Đĩa Lá Nhỏ",
        long: "Đĩa Lá Nhỏ vẽ tay màu kem"
      },
      productType: "Đĩa dùng hằng ngày",
      catalogOrder: 1,
      collectionIds: ["ban-an"],
      useCases: ["everyday-table", "housewarming-gift"],
      keywords: ["đĩa", "lá", "bàn ăn", "quà tân gia"],
      retailEligibility: "retail",
      catalogPrice: {
        type: "single",
        amountVnd: 520000
      },
      defaultVariantId: "kem",
      options: [],
      variants: [
        {
          id: "kem",
          label: "Kem",
          optionValues: {},
          sku: "HEDY-DEMO-DLN-KEM",
          priceVnd: 520000,
          inventory: {
            state: "in-stock",
            sellableQuantity: 6,
            quantityStatus: "illustrative"
          },
          leadTime: {
            status: "awaiting-merchant",
            customerText: "Thời gian gửi đi sẽ được xác nhận trước khi đặt đơn."
          },
          primaryAssetId: "img5",
          retailEligibility: "retail"
        }
      ],
      description: {
        short: "Một chiếc đĩa nhỏ cho bữa sáng, món tráng miệng hoặc món quà dùng được mỗi ngày.",
        long: "Dáng đĩa thấp và họa tiết lá tạo một điểm chạm nhẹ trên bàn ăn. Tên gọi, cấu tạo và công dụng trong bản mẫu cần được đối chiếu với sản phẩm thật trước khi xuất bản."
      },
      facts: {
        dimensions: {
          customerText: "Đường kính 18 cm · cao 2,2 cm — số đo minh họa",
          status: "illustrative"
        },
        packedShippingProfile: {
          id: "small-flat-demo",
          weightGrams: 1200,
          lengthMm: 280,
          widthMm: 280,
          heightMm: 140,
          parcelRule: "one-parcel",
          fragile: true,
          status: "illustrative"
        },
        material: "Chất liệu cần người bán xác nhận",
        finish: "Hoàn thiện cần người bán xác nhận",
        useRestrictions: "Chưa có xác nhận về tiếp xúc thực phẩm, lò vi sóng hoặc máy rửa chén.",
        care: "Nội dung chăm sóc đang chờ dữ liệu sản phẩm được duyệt.",
        handmadeVariation: "Chỉ hiển thị ghi chú biến thiên thủ công sau khi người bán xác nhận.",
        packaging: "Quy cách đóng gói và lựa chọn quà tặng chưa được phê duyệt.",
        policySummary: "Xem chính sách đang chờ phê duyệt trước khi đặt đơn."
      },
      media: [
        {
          assetId: "img5",
          role: "prototype-primary",
          altIntent: "Đĩa và cốc gốm màu kem có họa tiết cành lá, đặt trong hai hộp giấy.",
          status: "prototype-only"
        },
        {
          assetId: "missing-product-detail",
          role: "detail",
          altIntent: "Chưa có ảnh cận cảnh bề mặt được duyệt.",
          status: "missing"
        },
        {
          assetId: "missing-product-scale",
          role: "scale",
          altIntent: "Chưa có ảnh thể hiện tỷ lệ sử dụng được duyệt.",
          status: "missing"
        },
        {
          assetId: "missing-product-context",
          role: "context",
          altIntent: "Chưa có ảnh sản phẩm trong bối cảnh được duyệt.",
          status: "missing"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["branding", "volume"],
        customerText: "Cần số lượng lớn hoặc thêm dấu riêng? Hãy trao đổi yêu cầu đặt riêng."
      },
      related: {
        productFixtureIds: ["multi-variant"],
        caseFixtureIds: [],
        serviceRoute: "custom.html?use-case=individual&source=product"
      },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "multi-variant": {
      fixtureId: "multi-variant",
      slug: "bo-chen-som-mai",
      truthStatus: "illustrative",
      fixturePurpose: "Nhiều men và cỡ bộ; giá, ảnh, SKU, tồn kho đổi theo lựa chọn; có một tổ hợp không khả dụng.",
      name: {
        short: "Bộ Chén Sớm Mai",
        long: "Bộ Chén Sớm Mai hai sắc men cho bàn ăn"
      },
      productType: "Bộ chén",
      catalogOrder: 2,
      collectionIds: ["ban-an", "qua-tang"],
      useCases: ["everyday-table", "couple-gift", "volume-gift"],
      keywords: ["chén", "bộ chén", "sớm mai", "men sương", "men đất", "HEDY-DEMO-SM"],
      retailEligibility: "retail",
      catalogPrice: {
        type: "range",
        minVnd: 980000,
        maxVnd: 1280000,
        rangeBasis: "retail-eligible-variants"
      },
      defaultVariantId: "suong-bon",
      options: [
        {
          id: "glaze",
          label: "Sắc men",
          values: ["suong", "dat"]
        },
        {
          id: "set-size",
          label: "Cỡ bộ",
          values: ["doi", "bon"]
        }
      ],
      variants: [
        {
          id: "suong-doi",
          label: "Sương · Bộ đôi",
          optionValues: { glaze: "suong", "set-size": "doi" },
          sku: "HEDY-DEMO-SM-SUONG-2",
          priceVnd: 980000,
          inventory: { state: "in-stock", sellableQuantity: 5, quantityStatus: "illustrative" },
          leadTime: { status: "awaiting-merchant", customerText: "Thời gian gửi đi sẽ được xác nhận trước khi đặt đơn." },
          primaryAssetId: "img8",
          retailEligibility: "retail"
        },
        {
          id: "suong-bon",
          label: "Sương · Bộ bốn",
          optionValues: { glaze: "suong", "set-size": "bon" },
          sku: "HEDY-DEMO-SM-SUONG-4",
          priceVnd: 1280000,
          inventory: { state: "in-stock", sellableQuantity: 5, quantityStatus: "illustrative" },
          leadTime: { status: "awaiting-merchant", customerText: "Thời gian gửi đi sẽ được xác nhận trước khi đặt đơn." },
          primaryAssetId: "img8",
          retailEligibility: "retail"
        },
        {
          id: "dat-doi",
          label: "Đất · Bộ đôi",
          optionValues: { glaze: "dat", "set-size": "doi" },
          sku: "HEDY-DEMO-SM-DAT-2",
          priceVnd: 1040000,
          inventory: { state: "in-stock", sellableQuantity: 2, quantityStatus: "illustrative" },
          leadTime: { status: "awaiting-merchant", customerText: "Thời gian gửi đi sẽ được xác nhận trước khi đặt đơn." },
          primaryAssetId: "missing-multi-dat",
          retailEligibility: "retail"
        },
        {
          id: "dat-bon",
          label: "Đất · Bộ bốn",
          optionValues: { glaze: "dat", "set-size": "bon" },
          sku: "HEDY-DEMO-SM-DAT-4",
          priceVnd: 1340000,
          inventory: { state: "unavailable-combination", sellableQuantity: 0, quantityStatus: "illustrative" },
          leadTime: { status: "not-applicable", customerText: "" },
          primaryAssetId: "missing-multi-dat",
          retailEligibility: "unavailable",
          unavailableReason: "Tổ hợp minh họa này không có trong mẻ mẫu; chọn Bộ đôi hoặc đổi sang men Sương."
        }
      ],
      description: {
        short: "Bộ chén với hai sắc men và hai cỡ bộ để thử thay đổi lựa chọn trên trang sản phẩm.",
        long: "Fixture này kiểm tra việc đồng bộ hình ảnh, giá, SKU, tồn kho, giới hạn số lượng và điều kiện bán lẻ. Toàn bộ thông tin là dữ liệu mô phỏng, không mô tả một SKU đã được HEDY phê duyệt."
      },
      facts: {
        dimensions: {
          customerText: "Chén lớn Ø 14 cm; chén nhỏ Ø 9 cm — số đo minh họa",
          status: "illustrative"
        },
        packedShippingProfile: {
          id: "medium-set-demo",
          weightGrams: 3200,
          lengthMm: 360,
          widthMm: 300,
          heightMm: 220,
          parcelRule: "one-parcel-until-quantity-two",
          fragile: true,
          status: "illustrative"
        },
        material: "Gốm đá — mô tả minh họa, chờ xác nhận",
        finish: "Men mờ — mô tả minh họa, chờ xác nhận",
        useRestrictions: "Chưa có xác nhận về an toàn thực phẩm hoặc thiết bị gia dụng.",
        care: "Hướng dẫn chăm sóc đang chờ dữ liệu sản phẩm được duyệt.",
        handmadeVariation: "Màu men và dáng có thể biến thiên nếu người bán xác nhận đây là sản phẩm thủ công.",
        packaging: "Cấu hình hộp, chống va đập và quà tặng đang chờ phê duyệt.",
        policySummary: "Phí giao hàng chỉ được xác định sau khi có địa chỉ và hồ sơ kiện hàng đã duyệt."
      },
      media: [
        {
          assetId: "img8",
          role: "prototype-primary-suong",
          altIntent: "Bốn món gốm màu xám kem và hai thìa gỗ trong hộp quà trắng.",
          status: "prototype-only"
        },
        {
          assetId: "missing-multi-dat",
          role: "variant-fallback",
          altIntent: "Không có ảnh đã duyệt cho phiên bản men Đất.",
          status: "missing"
        },
        {
          assetId: "missing-product-detail",
          role: "detail",
          altIntent: "Chưa có ảnh cận cảnh bề mặt của fixture nhiều phiên bản.",
          status: "missing"
        },
        {
          assetId: "missing-product-scale",
          role: "scale",
          altIntent: "Chưa có ảnh thể hiện tỷ lệ của fixture nhiều phiên bản.",
          status: "missing"
        },
        {
          assetId: "missing-product-context",
          role: "context",
          altIntent: "Chưa có ảnh sử dụng fixture nhiều phiên bản trong bối cảnh.",
          status: "missing"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["branding", "volume", "unavailable-combination"],
        customerText: "Nếu cần gắn dấu riêng, số lượng lớn hoặc một tổ hợp chưa bán lẻ, hãy mở yêu cầu đặt riêng mà không làm mất lựa chọn hiện tại."
      },
      related: {
        productFixtureIds: ["simple-in-stock", "fragile-large"],
        caseFixtureIds: [],
        serviceRoute: "custom.html?use-case=corporate&source=product"
      },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#thanh-toan", "policies.html#doi-tra-huy-hoan"]
    },
    "fragile-large": {
      fixtureId: "fragile-large",
      slug: "binh-dang-moc-co-lon",
      truthStatus: "illustrative",
      fixturePurpose: "Sản phẩm lớn, dễ vỡ; hồ sơ đóng gói chuyển hành trình sang báo phí giao hàng thủ công.",
      name: {
        short: "Bình Dáng Mộc Cỡ Lớn",
        long: "Bình Dáng Mộc Cỡ Lớn cho góc nhà có hoa"
      },
      productType: "Bình trang trí",
      catalogOrder: 3,
      collectionIds: ["goc-nha", "qua-tang"],
      useCases: ["home-decor", "hospitality", "fragile-gift"],
      keywords: ["bình", "bình lớn", "góc nhà", "hoa", "dễ vỡ"],
      retailEligibility: "retail-manual-delivery",
      catalogPrice: {
        type: "single",
        amountVnd: 1890000
      },
      defaultVariantId: "kem-lon",
      options: [],
      variants: [
        {
          id: "kem-lon",
          label: "Kem · Cỡ lớn",
          optionValues: {},
          sku: "HEDY-DEMO-BDM-L",
          priceVnd: 1890000,
          inventory: { state: "in-stock", sellableQuantity: 3, quantityStatus: "illustrative" },
          leadTime: { status: "awaiting-merchant", customerText: "Thời gian gửi đi và phí giao sẽ được xác nhận theo kiện hàng." },
          primaryAssetId: "img4",
          retailEligibility: "retail-manual-delivery"
        }
      ],
      description: {
        short: "Một fixture để kiểm tra đóng gói lớn, tổng tiền chưa hoàn chỉnh và yêu cầu báo phí giao hàng.",
        long: "Trang sản phẩm có thể cho vào giỏ, nhưng Checkout phải giải thích rằng phí giao và tổng cuối đang chờ HEDY xác nhận. Khách chưa được yêu cầu thanh toán khi tổng tiền chưa hoàn chỉnh."
      },
      facts: {
        dimensions: {
          customerText: "Đường kính 24 cm · cao 38 cm — số đo minh họa",
          status: "illustrative"
        },
        packedShippingProfile: {
          id: "large-fragile-demo",
          weightGrams: 6200,
          lengthMm: 420,
          widthMm: 420,
          heightMm: 560,
          parcelRule: "manual-review",
          fragile: true,
          deliveryTreatment: "manual-quote",
          status: "illustrative"
        },
        material: "Chất liệu cần người bán xác nhận",
        finish: "Hoàn thiện cần người bán xác nhận",
        useRestrictions: "Dùng trang trí trong fixture; công dụng thật chưa được xác nhận.",
        care: "Hướng dẫn chăm sóc đang chờ dữ liệu sản phẩm được duyệt.",
        handmadeVariation: "Chỉ hiển thị ghi chú biến thiên sau khi xác minh nguồn và kỹ thuật.",
        packaging: "Hồ sơ minh họa yêu cầu rà soát đóng gói thủ công trước khi báo phí.",
        policySummary: "Phí giao hàng và tổng cuối đang chờ xác nhận; chưa có yêu cầu thanh toán."
      },
      media: [
        {
          assetId: "img4",
          role: "prototype-primary",
          altIntent: "Hộp quà xanh có một vật gốm trắng và bó hoa khô.",
          status: "prototype-only"
        },
        {
          assetId: "missing-product-detail",
          role: "detail",
          altIntent: "Chưa có ảnh cận cảnh bề mặt cho sản phẩm lớn dễ vỡ.",
          status: "missing"
        },
        {
          assetId: "missing-product-scale",
          role: "scale",
          altIntent: "Chưa có ảnh thể hiện tỷ lệ của sản phẩm lớn dễ vỡ.",
          status: "missing"
        },
        {
          assetId: "missing-product-context",
          role: "context",
          altIntent: "Chưa có ảnh sản phẩm lớn trong không gian sử dụng.",
          status: "missing"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["volume", "hospitality", "delivery-exception"],
        customerText: "Cần nhiều bình hoặc giao cho dự án? Hãy trao đổi yêu cầu và địa điểm trước khi nhận báo giá riêng."
      },
      related: {
        productFixtureIds: ["simple-in-stock"],
        caseFixtureIds: [],
        serviceRoute: "custom.html?use-case=hospitality&source=product"
      },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#thanh-toan"]
    },
    "enquiry-only": {
      fixtureId: "enquiry-only",
      slug: "bo-qua-dau-rieng",
      truthStatus: "limited-content",
      fixturePurpose: "Sản phẩm không đủ dữ liệu để bán lẻ; chỉ mở tư vấn có ngữ cảnh.",
      name: {
        short: "Bộ Quà Dấu Riêng",
        long: "Bộ quà tặng có dấu riêng cho cá nhân hoặc tổ chức"
      },
      productType: "Khả năng đặt riêng",
      catalogOrder: 4,
      collectionIds: ["qua-tang"],
      useCases: ["personalization", "corporate-gift", "volume-gift"],
      keywords: ["quà", "cá nhân hóa", "logo", "doanh nghiệp", "số lượng"],
      retailEligibility: "enquiry-only",
      catalogPrice: {
        type: "separate-quotation",
        customerText: "Báo giá riêng sau khi trao đổi"
      },
      defaultVariantId: "consultation",
      options: [],
      variants: [
        {
          id: "consultation",
          label: "Trao đổi riêng",
          optionValues: {},
          sku: null,
          priceVnd: null,
          inventory: { state: "not-retail", sellableQuantity: 0, quantityStatus: "not-applicable" },
          leadTime: { status: "awaiting-consultation", customerText: "Số lượng và thời gian được xác nhận sau khi trao đổi." },
          primaryAssetId: "missing-enquiry-only",
          retailEligibility: "enquiry-only",
          unavailableReason: "Chưa có SKU, giá và điều kiện bán lẻ đã được duyệt."
        }
      ],
      description: {
        short: "Mẫu nội dung giới hạn cho nhu cầu cần thêm dấu, số lượng hoặc phương án đóng gói riêng.",
        long: "Đây không phải một sản phẩm bán lẻ hay dự án đã hoàn thành. HEDY cần trao đổi nhu cầu, số lượng, nội dung thiết kế, thời điểm và nơi giao trước khi có báo giá."
      },
      facts: {
        dimensions: { customerText: "Xác nhận theo phương án sau tư vấn.", status: "not-applicable" },
        packedShippingProfile: { id: "custom-manual", deliveryTreatment: "manual-quote", status: "not-applicable" },
        material: "Xác nhận theo yêu cầu và khả năng sản xuất.",
        finish: "Xác nhận sau tư vấn.",
        useRestrictions: "Xác nhận theo sản phẩm được đề xuất.",
        care: "Cung cấp theo sản phẩm được chốt.",
        handmadeVariation: "Cung cấp theo sản phẩm được chốt.",
        packaging: "Xác nhận sau tư vấn; không hứa gói quà hoặc che giá khi chưa duyệt.",
        policySummary: "Mỗi yêu cầu được báo giá riêng; gửi tin nhắn không tạo đơn hàng."
      },
      media: [
        {
          assetId: "missing-enquiry-only",
          role: "limited-content-fallback",
          altIntent: "Chưa có hình ảnh dự án hoặc sản phẩm được phép công bố.",
          status: "missing"
        },
        {
          assetId: "missing-product-detail",
          role: "detail",
          altIntent: "Chưa có ảnh chi tiết được phép công bố cho nhu cầu đặt riêng.",
          status: "missing"
        },
        {
          assetId: "missing-product-scale",
          role: "scale",
          altIntent: "Chưa có ảnh thể hiện tỷ lệ được phép công bố cho nhu cầu đặt riêng.",
          status: "missing"
        },
        {
          assetId: "missing-product-context",
          role: "context",
          altIntent: "Chưa có ảnh bối cảnh được phép công bố cho nhu cầu đặt riêng.",
          status: "missing"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["branding", "volume", "personalization"],
        customerText: "Mở lựa chọn Zalo hoặc Instagram và giữ lại ngữ cảnh của nhu cầu này."
      },
      related: {
        productFixtureIds: ["multi-variant"],
        caseFixtureIds: ["individual-personalized", "corporate-volume"],
        serviceRoute: "custom.html?source=product"
      },
      policyLinks: ["policies.html#thanh-toan", "contact.html"]
    }
  },
  cases: {
    "individual-personalized": {
      fixtureId: "individual-personalized",
      useCase: "individual",
      publicTitle: "Quà kỷ niệm có dấu riêng",
      publishState: "limited-preview-only",
      evidenceStatus: "awaiting-approved-case",
      routeEligible: false,
      imageAssetIds: [],
      need: null,
      deliveredCapability: null,
      outcome: null,
      publishableConstraints: null,
      limitedFallback: "HEDY chưa có hồ sơ dự án cá nhân được phép công bố. Phần này chỉ giới thiệu loại nhu cầu có thể trao đổi, không phải bằng chứng về công việc đã hoàn thành.",
      separateQuotationNote: "Mỗi yêu cầu được xem xét và báo giá riêng sau khi trao đổi.",
      contactPrompt: ["Dịp tặng", "Số lượng", "Nội dung hoặc dấu muốn thêm", "Thời điểm cần", "Tỉnh/thành giao"],
      sourceLabel: "Mở từ nhu cầu quà tặng cá nhân",
      related: { caseFixtureIds: [], productFixtureIds: ["simple-in-stock"], serviceRoute: "custom.html?use-case=individual" }
    },
    "corporate-volume": {
      fixtureId: "corporate-volume",
      useCase: "corporate",
      publicTitle: "Quà tặng doanh nghiệp và số lượng",
      publishState: "limited-preview-only",
      evidenceStatus: "awaiting-approved-case",
      routeEligible: false,
      imageAssetIds: [],
      need: null,
      deliveredCapability: null,
      outcome: null,
      publishableConstraints: null,
      limitedFallback: "Chưa có case doanh nghiệp, hình ảnh thương hiệu hoặc số liệu dự án được phép công bố. Không dùng ảnh sản phẩm có thương hiệu bên thứ ba để thay thế bằng chứng.",
      separateQuotationNote: "Giá bán lẻ không bao gồm thiết kế, gắn dấu hoặc sản xuất số lượng.",
      contactPrompt: ["Loại quà hoặc sản phẩm", "Số lượng dự kiến", "Logo hoặc nội dung có sẵn", "Mốc cần hàng", "Địa điểm giao"],
      sourceLabel: "Mở từ nhu cầu quà tặng doanh nghiệp",
      related: { caseFixtureIds: [], productFixtureIds: ["multi-variant"], serviceRoute: "custom.html?use-case=corporate" }
    },
    "hospitality-venue": {
      fixtureId: "hospitality-venue",
      useCase: "hospitality",
      publicTitle: "Đồ dùng cho không gian lưu trú hoặc địa điểm",
      publishState: "limited-preview-only",
      evidenceStatus: "awaiting-approved-case",
      routeEligible: false,
      imageAssetIds: [],
      need: null,
      deliveredCapability: null,
      outcome: null,
      publishableConstraints: null,
      limitedFallback: "HEDY chưa cung cấp hồ sơ địa điểm được phép công bố. Phần này nêu bối cảnh tư vấn cần chuẩn bị, không khẳng định dự án đã thực hiện.",
      separateQuotationNote: "Sản phẩm, số lượng, mẫu thử, lịch và giao nhận được xác nhận sau tư vấn.",
      contactPrompt: ["Loại hình không gian", "Sản phẩm và công năng", "Số lượng", "Tiêu chuẩn sử dụng", "Mốc khai trương hoặc cần hàng", "Địa điểm"],
      sourceLabel: "Mở từ nhu cầu không gian lưu trú hoặc địa điểm",
      related: { caseFixtureIds: [], productFixtureIds: ["fragile-large"], serviceRoute: "custom.html?use-case=hospitality" }
    }
  },
  experienceFixtures: {
    home: {
      default: { contentState: "limited-cases", heroTreatment: "limited-no-approved-proof", primaryRoutes: ["custom.html", "shop.html"] },
      "slow-hero-media": { contentState: "slow-hero-media", mediaState: "hero-slow", primaryRoutesPreserved: true },
      "failed-hero-media": { contentState: "failed-hero-media", mediaState: "hero-failed", primaryRoutesPreserved: true },
      "limited-cases": { contentState: "limited-cases", caseFixtureIds: ["individual-personalized", "corporate-volume", "hospitality-venue"] },
      "no-cases": { contentState: "no-cases", customPreparationVisible: true, contactVisible: true },
      "no-featured-products": { contentState: "no-featured-products", shopRecovery: true, customRecovery: true },
      "operational-announcement": { contentState: "operational-announcement", announcementStatus: "awaiting-merchant" }
    },
    shop: {
      default: { collectionIds: ["ban-an", "qua-tang", "goc-nha"], retailProductFixtureIds: ["simple-in-stock", "multi-variant", "fragile-large"], consultationFixtureIds: ["enquiry-only"] },
      "sparse-shop": { contentState: "sparse-shop", collectionIds: ["ban-an"], productFixtureIds: ["simple-in-stock"], preserveLayoutWithoutPlaceholders: true },
      "media-failure": { mediaState: "failed", preserveProductFacts: true, fallbackAssetId: "missing-product-primary" }
    },
    custom: {
      default: { contentState: "limited-cases", contactState: "default", caseFixtureIds: ["individual-personalized", "corporate-volume", "hospitality-venue"] },
      "limited-cases": { contentState: "limited-cases", contactState: "contextual" },
      "no-cases": { contentState: "no-cases", contactState: "contextual" },
      "failed-case-media": { contentState: "failed-case-media", mediaState: "case-failed", contactState: "contextual" },
      "channel-unavailable": { contentState: "limited-cases", contactState: "zalo-unavailable", unavailableChannel: "zalo", alternateChannel: "instagram" }
    },
    collection: {
      default: { collectionSource: "selected-collection", resultsInteractive: true, countsCurrent: true },
      loading: { collectionSource: "selected-collection", resultsInteractive: false, countsCurrent: false, preserveFilters: true },
      zero: { productFixtureIds: [], preserveFilters: true, clearFiltersAvailable: true, customRecovery: true },
      "load-failure": { preserveCurrentItems: true, preserveFilters: true, retry: true, countsCurrent: false },
      "removed-item": { removedFixtureId: "enquiry-only", announceCountChange: true, preservePosition: true },
      "media-failure": { mediaState: "failed", preserveCardFacts: true, fallbackAssetId: "missing-product-primary" },
      "restored-context": { collectionId: "ban-an", filters: [], sort: "featured", visibleCount: 2, scrollAnchor: "product-multi-variant" }
    },
    checkout: {
      initial: { addressState: "empty", deliveryState: "not-ready", paymentState: null, submitEnabled: false },
      "validation-error": { addressState: "invalid-phone", deliveryState: "not-ready", paymentState: null, preserveValidInput: true, submitEnabled: false },
      "address-service-error": { addressState: "service-error", deliveryState: "not-ready", paymentState: null, preserveValidInput: true, retry: true, submitEnabled: false },
      "not-ready": { addressState: "empty", deliveryState: "not-ready", paymentState: null, submitEnabled: false },
      calculating: { addressState: "valid", deliveryState: "calculating", paymentState: null, submitEnabled: false },
      "one-method": { addressState: "valid", deliveryState: "one-method", paymentState: "scenario-default", submitEnabled: true },
      "multiple-methods": { addressState: "valid", deliveryState: "multiple-methods", paymentState: null, submitEnabled: false },
      "zone-fallback": { addressState: "valid", deliveryState: "zone-fallback", paymentState: "scenario-default", submitEnabled: true },
      "manual-quote": { addressState: "valid", deliveryState: "manual-quote", paymentState: null, submitConsequence: "delivery-quote-request", submitEnabled: true },
      unsupported: { addressState: "valid", deliveryState: "unsupported", paymentState: null, contactRecovery: true, submitEnabled: false },
      "quote-failure": { addressState: "valid", deliveryState: "quote-failure", paymentState: null, preserveValidInput: true, retry: true, submitEnabled: false },
      stale: { addressState: "downstream-invalidated", deliveryState: "stale", paymentState: null, preserveValidInput: true, submitEnabled: false },
      "cod-ineligible": { addressState: "valid", deliveryState: "one-method", paymentState: "cod-ineligible", alternatePaymentRequiresEligibility: true, submitEnabled: false },
      submitting: { addressState: "valid", deliveryState: "scenario-current", paymentState: "scenario-current", duplicateSubmitLocked: true, submitEnabled: false },
      "known-creation-failure": { confirmationState: "known-creation-failure", preserveValidInput: true, retry: true, referenceCode: null },
      "unknown-outcome": { confirmationState: "unknown-outcome", preserveValidInput: true, blindRetryAllowed: false, referenceCode: null }
    },
    story: {
      default: { contentEntryId: "story-craft-limited", contentState: "evergreen-journal-alternative", provenanceStatus: "limited" },
      "limited-content": { contentEntryId: "story-craft-limited", publishableClaims: [], customRecovery: true, shopRecovery: true },
      "media-failure": { contentEntryId: "story-craft-limited", mediaState: "story-failed", preserveApprovedCopy: true }
    },
    search: {
      initial: { query: "", recentQueries: [], suggestionGroups: ["products", "collections", "content", "customService"] },
      recent: { query: "", recentQueries: ["chén", "quà doanh nghiệp"], storageScope: "device-prototype", clearAvailable: true },
      typing: { query: "ché", submitAvailable: true, suggestionRequestPending: true },
      suggestions: {
        query: "chén",
        groups: {
          products: ["multi-variant"],
          collections: ["ban-an"],
          content: ["story-craft-limited"],
          customService: ["custom.html?source=search"]
        }
      },
      loading: { query: "chén", resultsInteractive: false, preserveQuery: true, statusText: "Đang tìm “chén”…" },
      "mixed-results": {
        query: "quà",
        productFixtureIds: ["simple-in-stock", "multi-variant", "enquiry-only"],
        collectionIds: ["qua-tang"],
        contentIds: ["story-craft-limited"],
        serviceRoutes: ["custom.html?use-case=individual&source=search", "custom.html?use-case=corporate&source=search"],
        totalCount: 7,
        visibleCount: 7,
        truthStatus: "illustrative"
      },
      "zero-results": { query: "không-có-kết-quả", totalCount: 0, recoveryCollectionIds: ["ban-an", "qua-tang"], customRecovery: true },
      "empty-query": { query: "", totalCount: null, preserveSuggestions: true },
      "service-error": { query: "chén", preserveQuery: true, retry: true, shopRecovery: true },
      cleared: { query: "", recentQueriesPreserved: true, suggestionsRestored: true },
      retrying: { query: "chén", resultsInteractive: false, preserveQuery: true },
      "restored-context": { query: "chén", collectionIds: ["ban-an"], sort: "featured", visibleCount: 1, scrollAnchor: "result-multi-variant" }
    },
    address: {
      empty: { populatedFields: [], validFields: [], errors: [], deliveryInvalidated: true },
      valid: { populatedFields: ["recipientName", "phone", "province", "districtWard", "street"], validFields: ["recipientName", "phone", "province", "districtWard", "street"], errors: [], syntheticValuesHeldInMemory: true },
      "invalid-phone": { validFields: ["recipientName", "province", "districtWard", "street"], errors: [{ field: "phone", code: "vn-phone-format", message: "Nhập số điện thoại Việt Nam có đủ chữ số và không kèm chữ cái." }] },
      "invalid-address": { validFields: ["recipientName", "phone"], errors: [{ field: "street", code: "address-detail-required", message: "Nhập số nhà, đường hoặc thông tin tòa nhà để đánh giá giao hàng." }] },
      "downstream-invalidated": { changedField: "province", invalidatedFields: ["districtWard", "deliveryMethod", "deliveryQuote", "paymentEligibility"], preserveOtherValidFields: true },
      "service-error": { affectedFields: ["province", "districtWard"], preserveInput: true, retry: true, manualFallbackRequiresApproval: true }
    },
    media: {
      loading: { surface: "product", assetId: "img8", interactive: false, reserveAspectRatio: true, statusText: "Đang tải ảnh sản phẩm…" },
      loaded: { surface: "product", assetId: "img8", interactive: true, reserveAspectRatio: true },
      failed: { surface: "product", assetId: "img8", fallbackAssetId: "missing-product-primary", preserveFacts: true, retry: true, fallbackText: "Ảnh sản phẩm đang được cập nhật." },
      missing: { surface: "product", assetId: "missing-multi-dat", fallbackAssetId: "missing-product-primary", preserveFacts: true, retry: false, fallbackText: "Ảnh sản phẩm đang được cập nhật." },
      "hero-slow": {
        surface: "home-hero",
        assetId: null,
        renderAsset: false,
        reserveAspectRatio: true,
        preservePrimaryMessage: true,
        retry: false,
        statusText: "Hình mở đầu đang tải; nội dung Đặt riêng và các lối đi vẫn dùng được."
      },
      "hero-failed": {
        surface: "home-hero",
        assetId: null,
        renderAsset: false,
        reserveAspectRatio: true,
        preservePrimaryMessage: true,
        retry: true,
        fallbackText: "Không tải được hình mở đầu. Bạn vẫn có thể xem quy trình, chuẩn bị yêu cầu hoặc vào Cửa hàng."
      },
      "case-failed": {
        surface: "custom-case",
        assetId: null,
        renderAsset: false,
        reserveAspectRatio: true,
        preserveApprovedFacts: true,
        retry: true,
        neverUseCatalogFallback: true,
        fallbackText: "Không tải được hình dự án đã được phép công bố. Không dùng ảnh sản phẩm khác để thay thế bằng chứng."
      },
      "story-failed": {
        surface: "story",
        assetId: null,
        renderAsset: false,
        reserveAspectRatio: true,
        preserveApprovedCopy: true,
        retry: true,
        fallbackText: "Không tải được hình câu chuyện. Nội dung nguồn gốc hoặc quy trình chỉ tiếp tục hiển thị khi đã được duyệt."
      },
      "restricted-third-party": { assetId: "img1", renderAsset: false, retry: false, fallbackText: "Ảnh tham khảo chưa được phép sử dụng cho sản phẩm HEDY." }
    },
    content: {
      rich: { caseFixtureIds: [], customerFacing: false, requiresApprovedCaseEvidence: true },
      "limited-cases": { caseFixtureIds: ["individual-personalized", "corporate-volume", "hospitality-venue"], completedCaseCount: 0 },
      "no-cases": { caseFixtureIds: [], customPreparationVisible: true, contactVisible: true },
      "no-featured-products": { productFixtureIds: [], shopRecovery: true, customRecovery: true },
      "slow-hero-media": { mediaState: "hero-slow", preservePrimaryMessage: true, preserveNavigation: true },
      "failed-hero-media": { mediaState: "hero-failed", preservePrimaryMessage: true, preserveNavigation: true },
      "failed-case-media": { mediaState: "case-failed", approvedCaseFactsOnly: true, fallbackToLimitedCase: true, neverUseCatalogFallback: true },
      "failed-product-media": { mediaState: "failed", preserveProductFacts: true, fallbackAssetId: "missing-product-primary" },
      "sparse-shop": { collectionIds: ["ban-an"], productFixtureIds: ["simple-in-stock"], preserveLayoutWithoutPlaceholders: true },
      "operational-announcement": { customerText: "Thông báo vận hành sẽ xuất hiện sau khi nội dung và thời hạn áp dụng được duyệt.", truthStatus: "awaiting-merchant" },
      "evergreen-journal-alternative": { contentId: "story-craft-limited", journalRouteVisible: false, truthStatus: "limited-content" },
      "not-found": { recoveryRoutes: ["index.html", "custom.html", "shop.html", "search.html"] },
      "known-unavailable": { preserveApprovedBasicContext: true, relatedProducts: true, customRecovery: true, soldOutImplied: false }
    }
  },
  stateFixtures: {
    home: ["default", "slow-hero-media", "failed-hero-media", "limited-cases", "no-cases", "no-featured-products", "operational-announcement"],
    shop: ["default", "sparse-shop", "media-failure"],
    custom: ["default", "limited-cases", "no-cases", "failed-case-media", "channel-unavailable"],
    collection: ["default", "loading", "zero", "load-failure", "removed-item", "media-failure", "restored-context"],
    product: ["default", "invalid-combination", "sold-out", "enquiry-only", "made-to-order-review-only", "price-changed", "media-failure"],
    search: ["initial", "recent", "typing", "suggestions", "loading", "mixed-results", "zero-results", "empty-query", "service-error", "cleared", "retrying", "restored-context"],
    cart: ["normal", "updating", "removal-undo", "empty", "price-change", "stock-change", "stale-totals", "recalculation-failure"],
    address: ["empty", "valid", "invalid-phone", "invalid-address", "downstream-invalidated", "service-error"],
    delivery: ["not-ready", "calculating", "one-method", "multiple-methods", "zone-fallback", "manual-quote", "unsupported", "quote-failure", "stale"],
    payment: ["cod-eligible", "cod-ineligible", "transfer-awaiting-payment", "transfer-awaiting-verification", "gateway-future-hidden"],
    confirmation: ["received", "awaiting-payment", "awaiting-verification", "request-received", "notification-failure", "known-creation-failure", "unknown-outcome"],
    contact: ["default", "contextual", "zalo-unavailable", "instagram-unavailable", "open-failure", "offline"],
    media: ["loading", "loaded", "failed", "missing", "hero-slow", "hero-failed", "case-failed", "story-failed", "restricted-third-party"],
    content: ["rich", "limited-cases", "no-cases", "no-featured-products", "slow-hero-media", "failed-hero-media", "failed-case-media", "failed-product-media", "sparse-shop", "operational-announcement", "evergreen-journal-alternative", "not-found", "known-unavailable"],
    checkout: ["initial", "validation-error", "address-service-error", "not-ready", "calculating", "one-method", "multiple-methods", "zone-fallback", "manual-quote", "unsupported", "quote-failure", "stale", "cod-ineligible", "submitting", "known-creation-failure", "unknown-outcome"],
    story: ["default", "limited-content", "media-failure"]
  },
  commerceFixtures: {
    productOverrideContract: {
      version: 1,
      resolution: "clone-base-then-merge-declared-patches",
      baseSource: "products[baseFixtureId]",
      productResolution: "merge productPatch into the cloned base product when present",
      variantResolution: "select variants[variantId], then merge variantPatch when present",
      mediaResolution: "merge mediaPatch into the selected variant primary-media view without changing product facts",
      undeclaredFields: "preserve-from-base"
    },
    productOverrides: {
      default: {
        baseFixtureId: "multi-variant",
        variantId: "suong-bon",
        primaryAction: "add-to-cart"
      },
      "invalid-combination": {
        baseFixtureId: "multi-variant",
        variantId: "dat-bon",
        primaryAction: "correct-selection-or-consultation",
        preserveSelection: true
      },
      "sold-out": {
        baseFixtureId: "simple-in-stock",
        variantId: "kem",
        productPatch: { retailEligibility: "sold-out" },
        variantPatch: {
          id: "kem",
          retailEligibility: "sold-out",
          inventory: { state: "sold-out", sellableQuantity: 0, quantityStatus: "illustrative" }
        },
        primaryAction: "notify-or-recover",
        customerText: "Sản phẩm mẫu này hiện không thể mua; xem món liên quan hoặc trao đổi một yêu cầu tương tự."
      },
      "made-to-order-review-only": {
        baseFixtureId: "simple-in-stock",
        variantId: "kem",
        productPatch: { retailEligibility: "not-approved" },
        variantPatch: { id: "kem", retailEligibility: "not-approved" },
        customerFacing: false,
        primaryAction: "consultation",
        customerText: "Chỉ bật biến thể đặt trước bán lẻ sau khi D-03 và điều kiện thời gian/hủy được duyệt."
      },
      "price-changed": {
        baseFixtureId: "simple-in-stock",
        variantId: "kem",
        previousPriceVnd: 490000,
        currentPriceVnd: 520000,
        variantPatch: { id: "kem", priceVnd: 520000 },
        acknowledgementRequired: true,
        truthStatus: "illustrative"
      },
      "media-failure": {
        baseFixtureId: "multi-variant",
        variantId: "suong-bon",
        mediaPatch: {
          primaryAssetId: "missing-product-primary",
          state: "failed",
          fallbackAssetId: "missing-product-primary"
        },
        preserveProductFacts: true,
        fallbackText: "Ảnh sản phẩm đang được cập nhật."
      },
      "enquiry-only": {
        baseFixtureId: "enquiry-only",
        variantId: "consultation",
        primaryAction: "contact-chooser",
        addToCartAvailable: false
      }
    },
    cartStates: {
      normal: { lineSet: "standardCod", totalsCurrent: true, checkoutEnabled: true },
      updating: { lineSet: "standardCod", totalsCurrent: false, checkoutEnabled: false, controlsRetained: true, liveStatus: "Đang cập nhật số lượng và tạm tính…" },
      "removal-undo": { lineSet: "standardCod", removedFixtureId: "multi-variant", undoAvailable: true, totalsCurrent: true },
      empty: { lineSet: null, totalsCurrent: true, checkoutEnabled: false, recoveryRoutes: ["shop.html", "index.html", "custom.html"] },
      "price-change": { lineSet: "priceChange", totalsCurrent: true, checkoutEnabled: false, acknowledgementRequired: true },
      "stock-change": { lineSet: "stockChange", totalsCurrent: true, checkoutEnabled: false, correctionRequired: true },
      "stale-totals": { lineSet: "standardCod", totalsCurrent: false, checkoutEnabled: false, retry: true },
      "recalculation-failure": { lineSet: "standardCod", totalsCurrent: false, checkoutEnabled: false, retry: true, preserveLastKnownLines: true }
    },
    cartLines: {
      standardCod: [
        {
          productFixtureId: "multi-variant",
          variantId: "suong-bon",
          quantity: 1,
          unitPriceVnd: 1280000,
          lineStatus: "current"
        }
      ],
      standardTransfer: [
        {
          productFixtureId: "simple-in-stock",
          variantId: "kem",
          quantity: 1,
          unitPriceVnd: 520000,
          lineStatus: "current"
        }
      ],
      manualDelivery: [
        {
          productFixtureId: "fragile-large",
          variantId: "kem-lon",
          quantity: 1,
          unitPriceVnd: 1890000,
          lineStatus: "current"
        }
      ],
      priceChange: [
        {
          productFixtureId: "simple-in-stock",
          variantId: "kem",
          quantity: 1,
          previousUnitPriceVnd: 490000,
          unitPriceVnd: 520000,
          lineStatus: "price-changed",
          truthStatus: "illustrative"
        }
      ],
      stockChange: [
        {
          productFixtureId: "multi-variant",
          variantId: "dat-doi",
          quantity: 3,
          sellableQuantity: 2,
          unitPriceVnd: 1040000,
          lineStatus: "quantity-exceeds-stock",
          truthStatus: "illustrative"
        }
      ]
    },
    delivery: {
      "not-ready": { feeVnd: null, totalFinal: false, customerText: "Nhập đủ địa chỉ để xem phương án và phí giao hàng." },
      calculating: { feeVnd: null, totalFinal: false, customerText: "Đang tính phương án giao hàng; bạn vẫn có thể sửa địa chỉ." },
      "one-method": { methodId: "standard-demo", feeVnd: 42000, totalFinal: true, methodLabel: "Giao tiêu chuẩn — dữ liệu mẫu", estimateLabel: "2–4 ngày làm việc — minh họa, chờ cấu hình", source: "carrier-quote-demo" },
      "multiple-methods": {
        feeVnd: null,
        totalFinal: false,
        selectedMethodId: null,
        methods: [
          { id: "standard-demo", feeVnd: 42000, label: "Giao tiêu chuẩn — dữ liệu mẫu", estimateLabel: "2–4 ngày làm việc — minh họa", source: "carrier-quote-demo" },
          { id: "careful-demo", feeVnd: 68000, label: "Giao tăng cường cho hàng dễ vỡ — dữ liệu mẫu", estimateLabel: "3–5 ngày làm việc — minh họa", source: "carrier-quote-demo" }
        ],
        customerText: "Chọn một phương án để hoàn tất tổng tiền — dữ liệu mẫu."
      },
      "zone-fallback": { methodId: "zone-standard-demo", feeVnd: 48000, totalFinal: true, methodLabel: "Giao theo bảng khu vực — dữ liệu mẫu", estimateLabel: "3–5 ngày làm việc — minh họa, chờ cấu hình", source: "zone-table-demo" },
      "manual-quote": { methodId: "manual-delivery-request", feeVnd: null, totalFinal: false, methodLabel: "HEDY xác nhận phí riêng", customerText: "Phí giao hàng và tổng cuối đang chờ xác nhận; chưa cần thanh toán." },
      unsupported: { feeVnd: null, totalFinal: false, customerText: "Địa chỉ mẫu nằm ngoài vùng được cấu hình; sửa địa chỉ hoặc mở lựa chọn liên hệ." },
      "quote-failure": { feeVnd: null, totalFinal: false, customerText: "Chưa lấy được phí giao hàng. Thử lại hoặc chọn phương án xác nhận thủ công nếu được phép." },
      stale: { feeVnd: null, totalFinal: false, customerText: "Địa chỉ đã thay đổi; phí trước đó không còn hiệu lực và phải được tính lại." }
    },
    payment: {
      "cod-eligible": { method: "cod", enabled: true, customerText: "Thanh toán số tiền cuối khi nhận hàng — điều kiện minh họa." },
      "cod-ineligible": { method: "cod", enabled: false, customerText: "COD không khả dụng cho tình huống mẫu này; lý do thật cần được cấu hình." },
      "transfer-awaiting-payment": {
        method: "bank-transfer",
        enabled: true,
        liveTransferEnabled: false,
        instructionMode: "synthetic-review-only",
        accountConfigurationStatus: "missing-owner-input",
        exactAmountSource: "reviewScenarios[scenarioId].paymentInstructionSnapshot.amountVnd",
        referenceSource: "confirmation.referenceCode",
        deadlineSource: "reviewScenarios[scenarioId].paymentInstructionSnapshot.deadline",
        verificationMode: "manual-reconciliation",
        requiredInstructionFields: ["amountVnd", "bankLabel", "accountHolder", "accountNumber", "transferReference", "deadline"],
        customerText: "Đơn mẫu đã được tạo; chỉ dùng hướng dẫn được gắn nhãn mô phỏng để đánh giá giao diện, không chuyển tiền thật."
      },
      "transfer-awaiting-verification": {
        method: "bank-transfer",
        enabled: true,
        liveTransferEnabled: false,
        instructionMode: "synthetic-review-only",
        accountConfigurationStatus: "missing-owner-input",
        referenceSource: "confirmation.referenceCode",
        verificationMode: "manual-reconciliation",
        customerText: "Bản mẫu đang hiển thị trạng thái chờ đối chiếu; không có giao dịch thật nào được kiểm tra và ảnh chụp không tự xác nhận đã thanh toán."
      },
      "gateway-future-hidden": { method: "gateway", enabled: false, customerFacing: false, customerText: "Biến thể hệ thống tương lai; không hiển thị trong MVP." }
    },
    confirmation: [
      { scenario: "standard-cod", state: "received", resultCreated: true, resultType: "order", referenceCode: "HEDY-MAU-COD-01", orderCreated: true, orderCode: "HEDY-MAU-COD-01", requestCreated: false, requestCode: null, paymentStatus: "due-on-delivery", deliveryStatus: "quoted", notificationStatus: "not-promised" },
      { scenario: "standard-transfer", state: "awaiting-payment", resultCreated: true, resultType: "order", referenceCode: "HEDY-MAU-CK-01", orderCreated: true, orderCode: "HEDY-MAU-CK-01", requestCreated: false, requestCode: null, paymentStatus: "awaiting-payment", deliveryStatus: "quoted", notificationStatus: "not-promised" },
      { scenario: "standard-transfer", state: "awaiting-verification", resultCreated: true, resultType: "order", referenceCode: "HEDY-MAU-CK-01", orderCreated: true, orderCode: "HEDY-MAU-CK-01", requestCreated: false, requestCode: null, paymentStatus: "awaiting-verification", deliveryStatus: "quoted", notificationStatus: "not-promised" },
      { scenario: "manual-delivery", state: "request-received", resultCreated: true, resultType: "delivery-quote-request", referenceCode: "HEDY-MAU-YC-01", orderCreated: false, orderCode: null, requestCreated: true, requestCode: "HEDY-MAU-YC-01", paymentStatus: "not-actionable", deliveryStatus: "fee-pending", notificationStatus: "not-promised" },
      { scenario: "standard-cod", state: "notification-failure", resultCreated: true, resultType: "order", referenceCode: "HEDY-MAU-COD-01", orderCreated: true, orderCode: "HEDY-MAU-COD-01", requestCreated: false, requestCode: null, paymentStatus: "due-on-delivery", deliveryStatus: "quoted", notificationStatus: "failed" },
      { scenario: "standard-transfer", state: "notification-failure", resultCreated: true, resultType: "order", referenceCode: "HEDY-MAU-CK-01", orderCreated: true, orderCode: "HEDY-MAU-CK-01", requestCreated: false, requestCode: null, paymentStatus: "awaiting-payment", deliveryStatus: "quoted", notificationStatus: "failed" },
      { scenario: "manual-delivery", state: "notification-failure", resultCreated: true, resultType: "delivery-quote-request", referenceCode: "HEDY-MAU-YC-01", orderCreated: false, orderCode: null, requestCreated: true, requestCode: "HEDY-MAU-YC-01", paymentStatus: "not-actionable", deliveryStatus: "fee-pending", notificationStatus: "failed" },
      { scenario: "standard-cod", state: "known-creation-failure", resultCreated: false, resultType: null, referenceCode: null, orderCreated: false, orderCode: null, requestCreated: false, requestCode: null, paymentStatus: "not-created", deliveryStatus: "not-created", notificationStatus: "not-sent" },
      { scenario: "standard-transfer", state: "known-creation-failure", resultCreated: false, resultType: null, referenceCode: null, orderCreated: false, orderCode: null, requestCreated: false, requestCode: null, paymentStatus: "not-created", deliveryStatus: "not-created", notificationStatus: "not-sent" },
      { scenario: "manual-delivery", state: "known-creation-failure", resultCreated: false, resultType: null, referenceCode: null, orderCreated: false, orderCode: null, requestCreated: false, requestCode: null, paymentStatus: "not-created", deliveryStatus: "not-created", notificationStatus: "not-sent" },
      { scenario: "standard-cod", state: "unknown-outcome", resultCreated: null, resultType: null, referenceCode: null, orderCreated: null, orderCode: null, requestCreated: null, requestCode: null, paymentStatus: "unknown", deliveryStatus: "unknown", notificationStatus: "unknown" },
      { scenario: "standard-transfer", state: "unknown-outcome", resultCreated: null, resultType: null, referenceCode: null, orderCreated: null, orderCode: null, requestCreated: null, requestCode: null, paymentStatus: "unknown", deliveryStatus: "unknown", notificationStatus: "unknown" },
      { scenario: "manual-delivery", state: "unknown-outcome", resultCreated: null, resultType: null, referenceCode: null, orderCreated: null, orderCode: null, requestCreated: null, requestCode: null, paymentStatus: "unknown", deliveryStatus: "unknown", notificationStatus: "unknown" }
    ],
    contact: {
      default: { sourceContext: null, zalo: "unconfigured", instagram: "unconfigured", responseExpectation: "unconfigured" },
      contextual: { sourceContext: "fixture-only", checklistAvailable: true, prefilledMessageAllowed: false },
      "zalo-unavailable": { zalo: "disabled-with-reason", instagram: "available-if-configured", generalContact: "available-if-configured" },
      "instagram-unavailable": { zalo: "available-if-configured", instagram: "disabled-with-reason", generalContact: "available-if-configured" },
      "open-failure": { retry: true, copyDestination: true, preserveContext: true },
      offline: { retry: true, copyDestination: true, preserveContext: true }
    }
  },
  reviewScenarios: {
    "custom-individual": {
      routeSequence: ["index.html", "custom.html?use-case=individual&source=home#du-an", "contact.html?state=contextual&source=case&fixture=individual-personalized"],
      caseFixtureId: "individual-personalized",
      expectedOutcome: "Người xem hiểu đây là năng lực đang chờ bằng chứng và tin nhắn không tạo đơn hoặc báo giá."
    },
    "custom-corporate": {
      routeSequence: ["index.html", "custom.html?use-case=corporate&source=home#du-an", "contact.html?state=contextual&source=case&fixture=corporate-volume"],
      caseFixtureId: "corporate-volume",
      expectedOutcome: "Người xem chuẩn bị số lượng, nội dung, thời điểm và nơi giao trước khi chọn Zalo hoặc Instagram."
    },
    "standard-cod": {
      routeSequence: ["shop.html", "collection.html?collection=ban-an", "product.html?fixture=multi-variant&variant=suong-bon", "cart.html?scenario=standard-cod&state=normal", "checkout.html?scenario=standard-cod&state=one-method", "confirmation.html?scenario=standard-cod&state=received"],
      productFixtureId: "multi-variant",
      variantId: "suong-bon",
      cartLineSet: "standardCod",
      lineSnapshot: [{ productFixtureId: "multi-variant", variantId: "suong-bon", quantity: 1, unitPriceVnd: 1280000 }],
      recipientSnapshot: { recipientName: "Người nhận mẫu", phone: "0900000000", province: "Thành phố Hồ Chí Minh — dữ liệu mẫu", districtWard: "Quận 1 — dữ liệu mẫu", street: "01 Đường Mẫu — không phải địa chỉ giao thật", truthStatus: "synthetic" },
      addressFixtureId: "valid",
      deliveryFixtureId: "one-method",
      selectedDeliveryMethodId: "standard-demo",
      paymentFixtureId: "cod-eligible",
      totalsSnapshot: { currency: "VND", subtotalVnd: 1280000, deliveryFeeVnd: 42000, totalVnd: 1322000, totalFinal: true, truthStatus: "illustrative" },
      confirmationFixture: { scenario: "standard-cod", state: "received", resultType: "order", referenceCode: "HEDY-MAU-COD-01" }
    },
    "standard-transfer": {
      routeSequence: ["product.html?fixture=simple-in-stock&variant=kem", "cart.html?scenario=standard-transfer&state=normal", "checkout.html?scenario=standard-transfer&state=one-method", "confirmation.html?scenario=standard-transfer&state=awaiting-payment"],
      productFixtureId: "simple-in-stock",
      variantId: "kem",
      cartLineSet: "standardTransfer",
      lineSnapshot: [{ productFixtureId: "simple-in-stock", variantId: "kem", quantity: 1, unitPriceVnd: 520000 }],
      recipientSnapshot: { recipientName: "Người nhận mẫu", phone: "0900000000", province: "Thành phố Hồ Chí Minh — dữ liệu mẫu", districtWard: "Quận 1 — dữ liệu mẫu", street: "01 Đường Mẫu — không phải địa chỉ giao thật", truthStatus: "synthetic" },
      addressFixtureId: "valid",
      deliveryFixtureId: "one-method",
      selectedDeliveryMethodId: "standard-demo",
      paymentFixtureId: "transfer-awaiting-payment",
      totalsSnapshot: { currency: "VND", subtotalVnd: 520000, deliveryFeeVnd: 42000, totalVnd: 562000, totalFinal: true, truthStatus: "illustrative" },
      paymentInstructionSnapshot: {
        instructionMode: "synthetic-review-only",
        liveTransferEnabled: false,
        amountVnd: 562000,
        bankLabel: "NGÂN HÀNG MẪU — KHÔNG CHUYỂN TIỀN",
        accountHolder: "HEDY ATELIER — DỮ LIỆU MẪU",
        accountNumber: "0000 0000 0000",
        transferReference: "HEDY-MAU-CK-01",
        deadline: "Trong 24 giờ kể từ khi tạo đơn mẫu — minh họa",
        verificationMode: "manual-reconciliation",
        truthStatus: "illustrative"
      },
      confirmationFixture: { scenario: "standard-transfer", state: "awaiting-payment", resultType: "order", referenceCode: "HEDY-MAU-CK-01" }
    },
    "manual-delivery": {
      routeSequence: ["product.html?fixture=fragile-large&variant=kem-lon", "cart.html?scenario=manual-delivery&state=normal", "checkout.html?scenario=manual-delivery&state=manual-quote", "confirmation.html?scenario=manual-delivery&state=request-received"],
      productFixtureId: "fragile-large",
      variantId: "kem-lon",
      cartLineSet: "manualDelivery",
      lineSnapshot: [{ productFixtureId: "fragile-large", variantId: "kem-lon", quantity: 1, unitPriceVnd: 1890000 }],
      recipientSnapshot: { recipientName: "Người nhận mẫu", phone: "0900000000", province: "Thành phố Hồ Chí Minh — dữ liệu mẫu", districtWard: "Quận 1 — dữ liệu mẫu", street: "01 Đường Mẫu — không phải địa chỉ giao thật", truthStatus: "synthetic" },
      addressFixtureId: "valid",
      deliveryFixtureId: "manual-quote",
      selectedDeliveryMethodId: "manual-delivery-request",
      paymentFixtureId: null,
      totalsSnapshot: { currency: "VND", subtotalVnd: 1890000, deliveryFeeVnd: null, totalVnd: null, totalFinal: false, truthStatus: "illustrative-pending-delivery" },
      confirmationFixture: { scenario: "manual-delivery", state: "request-received", resultType: "delivery-quote-request", referenceCode: "HEDY-MAU-YC-01" }
    }
  }
};

if (typeof window !== "undefined") {
  window.HedyPrototypeData = hedyPrototypeData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = hedyPrototypeData;
}
