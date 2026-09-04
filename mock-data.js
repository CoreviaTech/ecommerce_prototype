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
    },
    "am-chen": {
      id: "am-chen",
      label: "Ấm chén & Ly cốc",
      shortDescription: "Bộ ấm trà và cốc gốm thủ công cho những khoảng nghỉ thảnh thơi.",
      truthStatus: "illustrative"
    }
  },
  shopCategories: {
    "bat-an": {
      id: "bat-an",
      label: "Bát đĩa",
      subTitle: "Cho bữa cơm sum vầy ấm cúng",
      collectionTarget: "ban-an",
      productFixtureIds: ["simple-in-stock", "multi-variant", "tray-stone", "bowl-earth", "plate-oval", "bowl-soup", "plate-snack", "pot-casserole"]
    },
    "am-chen": {
      id: "am-chen",
      label: "Ấm chén",
      subTitle: "Cho tách trà sáng và khoảng lặng riêng",
      collectionTarget: "am-chen",
      productFixtureIds: ["tea-set-zen", "tea-pot-side", "mug-sand", "cup-tasting", "mug-handle", "tea-pitcher", "tea-caddy", "tumbler-fire"]
    },
    "trang-tri": {
      id: "trang-tri",
      label: "Trang trí",
      subTitle: "Cho góc nhà tĩnh tại và an yên",
      collectionTarget: "goc-nha",
      productFixtureIds: ["fragile-large", "vase-dew", "vase-decor", "vase-tall", "holder-candle", "holder-incense", "sculpt-vessel", "plate-display"]
    },
    "qua-tang": {
      id: "qua-tang",
      label: "Quà tặng",
      subTitle: "Trao gửi chân tình bền lâu",
      collectionTarget: "qua-tang",
      productFixtureIds: ["gift-calm", "gift-tea", "gift-linen", "gift-housewarming", "gift-couple", "gift-fragrance", "enquiry-only", "gift-corporate"]
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
    productMug: {
      path: "materials/product-mug.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 1024,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Cốc gốm men cát quai tròn thủ công trên khăn linen.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-retail",
      visibleIdentity: "HEDY"
    },
    productTray: {
      path: "materials/product-tray.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 1024,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Khay gốm đá mộc tạo hình tự nhiên trên bàn gỗ.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-retail",
      visibleIdentity: "HEDY"
    },
    productVaseDew: {
      path: "materials/product-vase-dew.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 1024,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Bình hoa giọt sương men mờ cắm cành hoa khô.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-retail",
      visibleIdentity: "HEDY"
    },
    customGiftBox: {
      path: "materials/custom-journey.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 768,
      aspectRatio: "4:3",
      focalPoint: "50% 50%",
      allowedCrops: ["4:3", "16:9", "1:1"],
      altIntent: "Hộp quà gốm thủ công chế tác riêng bọc nơ đay và thiệp quà tặng.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-custom",
      visibleIdentity: "HEDY"
    },
    productTeaSet: {
      path: "materials/product-tea-set.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 1024,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Bộ ấm chén gốm mộc vuốt tay men hạt ấm cúng trên bàn gỗ mộc.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-retail",
      visibleIdentity: "HEDY"
    },
    productBowls: {
      path: "materials/product-bowls.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 1024,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Hai bát gốm men đốm khoáng xếp chồng trên khăn vải linen tự nhiên.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-retail",
      visibleIdentity: "HEDY"
    },
    productVaseDecor: {
      path: "materials/product-vase-decor.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 1024,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Bình hoa gốm mộc tạo hình wabi-sabi mộc mạc cắm cành hoa khô.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-retail",
      visibleIdentity: "HEDY"
    },
    productGiftLinen: {
      path: "materials/product-gift-linen.jpg",
      source: "generated-concept-asset",
      width: 1024,
      height: 1024,
      aspectRatio: "1:1",
      focalPoint: "50% 50%",
      allowedCrops: ["1:1", "4:5"],
      altIntent: "Hộp quà gỗ gốm thủ công kèm hũ trà hoa khô bọc nơ vải linen thắt tay.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-retail",
      visibleIdentity: "HEDY"
    },
    corporateGifting: {
      path: "materials/corporate-gifting.jpg",
      source: "generated-concept-asset",
      width: 1792,
      height: 1024,
      aspectRatio: "16:9",
      focalPoint: "50% 50%",
      allowedCrops: ["16:9", "4:3"],
      altIntent: "Hai doanh nhân trao nhau hộp quà tặng gốm sứ chế tác cao cấp trong văn phòng sang trọng.",
      failureFallback: "quiet-ritual-placeholder",
      rightsStatus: "concept-approved",
      customerUse: "prototype-custom",
      visibleIdentity: "HEDY ATELIER"
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
          primaryAssetId: "customGiftBox",
          retailEligibility: "enquiry-only",
          unavailableReason: "Chưa có SKU, giá và điều kiện bán lẻ đã được duyệt."
        }
      ],
      description: {
        short: "Giải pháp thiết kế và chế tác riêng theo ý niệm: khắc dấu logo, chọn màu men độc bản và phom dáng riêng biệt.",
        long: "Dành cho quà tặng doanh nghiệp, kỷ niệm cá nhân hoặc dự án không gian ẩm thực. HEDY cùng bạn trao đổi cụ thể về số lượng, phom dáng và tiến độ trước khi tiến hành thực hiện."
      },
      facts: {
        dimensions: { customerText: "Thiết kế linh hoạt theo từng giải pháp.", status: "not-applicable" },
        packedShippingProfile: { id: "custom-manual", deliveryTreatment: "manual-quote", status: "not-applicable" },
        material: "Gốm thủ công chế tác theo yêu cầu dự án.",
        finish: "Men mờ, men rạn hoặc men cát theo mẫu duyệt.",
        useRestrictions: "Tùy biến theo tiêu chuẩn sử dụng.",
        care: "Cung cấp cẩm nang sử dụng chi tiết theo từng dòng sản phẩm.",
        handmadeVariation: "Mỗi sản phẩm đều mang dấu ấn thủ công độc bản.",
        packaging: "Hộp quà thương hiệu thiết kế đồng bộ theo nhận diện riêng.",
        policySummary: "Hợp đồng chế tác và tiến độ được thống nhất rõ ràng trước khi sản xuất."
      },
      media: [
        {
          assetId: "customGiftBox",
          role: "prototype-primary",
          altIntent: "Hộp quà gốm thủ công chế tác riêng bọc nơ đay và thiệp quà tặng.",
          status: "prototype-only"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["branding", "volume", "personalization"],
        customerText: "Mở lựa chọn Zalo hoặc Instagram để trao đổi trực tiếp ý tưởng của bạn cùng HEDY."
      },
      related: {
        productFixtureIds: ["multi-variant"],
        caseFixtureIds: ["individual-personalized", "corporate-volume"],
        serviceRoute: "custom.html?source=product"
      },
      policyLinks: ["policies.html#thanh-toan", "contact.html"]
    },
    "mug-sand": {
      fixtureId: "mug-sand",
      slug: "coc-men-cat-quai-tron",
      truthStatus: "illustrative",
      fixturePurpose: "Cốc gốm uống nước hằng ngày, phom dáng ấm áp.",
      name: {
        short: "Cốc Men Cát Quai Tròn",
        long: "Cốc gốm thủ công men cát quai tròn dáng ấm"
      },
      productType: "Cốc dùng hằng ngày",
      catalogOrder: 3,
      collectionIds: ["ban-an", "qua-tang"],
      useCases: ["everyday-table", "housewarming-gift", "coffee-ritual"],
      keywords: ["cốc", "ly", "men cát", "quà tặng", "bàn ăn"],
      retailEligibility: "retail",
      catalogPrice: {
        type: "single",
        amountVnd: 360000
      },
      defaultVariantId: "men-cat",
      options: [],
      variants: [
        {
          id: "men-cat",
          label: "Men cát thủ công",
          optionValues: {},
          sku: "HEDY-DEMO-CMC",
          priceVnd: 360000,
          inventory: {
            state: "in-stock",
            sellableQuantity: 8,
            quantityStatus: "illustrative"
          },
          leadTime: {
            status: "ready",
            customerText: "Sẵn sàng gửi trong 1-2 ngày."
          },
          primaryAssetId: "productMug",
          retailEligibility: "retail"
        }
      ],
      description: {
        short: "Chiếc cốc gốm đầm tay với lớp men cát mịn màng, quai tròn mềm mại cho khoảng nghỉ thảnh thơi.",
        long: "Phom dáng tròn đầy giữ nhiệt tốt cho trà và cà phê, điểm xuyết họa tiết lá cây ép chìm tự nhiên trên thân gốm."
      },
      facts: {
        dimensions: {
          customerText: "Đường kính 8,5 cm · cao 9 cm · dung tích 320ml",
          status: "illustrative"
        },
        packedShippingProfile: {
          id: "small-fragile-mug",
          weightGrams: 520,
          fragile: true,
          parcelRule: "one-parcel",
          status: "illustrative"
        },
        material: "Gốm đá nung nhiệt độ cao 1250°C",
        finish: "Men mờ chấm khoáng tự nhiên",
        useRestrictions: "An toàn với thực phẩm và lò vi sóng.",
        care: "Rửa nhẹ tay với bọt biển mềm.",
        handmadeVariation: "Mỗi chiếc cốc có độ loang men và chấm hạt độc bản.",
        packaging: "Đóng hộp kraft chống va đập tiêu chuẩn.",
        policySummary: "Hỗ trợ đổi mới nếu có sứt mẻ trong quá trình vận chuyển."
      },
      media: [
        {
          assetId: "productMug",
          role: "prototype-primary",
          altIntent: "Cốc gốm men cát quai tròn trên khăn linen.",
          status: "prototype-only"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["branding", "volume"],
        customerText: "Cần khắc tên hoặc đặt làm quà tặng sự kiện? Trao đổi cùng HEDY."
      },
      related: {
        productFixtureIds: ["simple-in-stock", "multi-variant"],
        caseFixtureIds: [],
        serviceRoute: "custom.html?source=product"
      },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "tray-stone": {
      fixtureId: "tray-stone",
      slug: "khay-gom-da-moc",
      truthStatus: "illustrative",
      fixturePurpose: "Khay đĩa bàn ăn tạo hình tự nhiên.",
      name: {
        short: "Khay Gốm Đá Mộc",
        long: "Khay gốm đá thủ công tạo hình tự nhiên"
      },
      productType: "Khay đĩa bàn ăn",
      catalogOrder: 4,
      collectionIds: ["ban-an", "goc-nha"],
      useCases: ["everyday-table", "home-decor"],
      keywords: ["khay", "đĩa", "đá mộc", "bàn ăn"],
      retailEligibility: "retail",
      catalogPrice: {
        type: "single",
        amountVnd: 680000
      },
      defaultVariantId: "da-moc",
      options: [],
      variants: [
        {
          id: "da-moc",
          label: "Men đá tự nhiên",
          optionValues: {},
          sku: "HEDY-DEMO-KGD",
          priceVnd: 680000,
          inventory: {
            state: "in-stock",
            sellableQuantity: 4,
            quantityStatus: "illustrative"
          },
          leadTime: {
            status: "ready",
            customerText: "Sẵn sàng gửi trong 1-2 ngày."
          },
          primaryAssetId: "productTray",
          retailEligibility: "retail"
        }
      ],
      description: {
        short: "Tạo hình uốn lượn tự nhiên như đá cuội ven suối, thích hợp bày món ăn nhẹ hoặc phụ kiện góc bàn.",
        long: "Bề mặt men mờ điểm xuyết hạt khoáng ấm áp, viền mộc không đều tạo nên vẻ đẹp thuần khiết cho không gian sống."
      },
      facts: {
        dimensions: {
          customerText: "Đường kính 22 cm · độ dày 1,8 cm",
          status: "illustrative"
        },
        packedShippingProfile: {
          id: "medium-tray",
          weightGrams: 850,
          fragile: true,
          parcelRule: "one-parcel",
          status: "illustrative"
        },
        material: "Đất sét chịu nhiệt cao",
        finish: "Men mờ thô mộc tự nhiên",
        useRestrictions: "An toàn tiếp xúc thực phẩm.",
        care: "Lau khô sau khi vệ sinh.",
        handmadeVariation: "Đường lượn viền đĩa được nắn thủ công từng chiếc.",
        packaging: "Hộp quà bọc giấy rơm định hình an toàn.",
        policySummary: "Đổi trả trong 7 ngày nếu sản phẩm lỗi chế tác."
      },
      media: [
        {
          assetId: "productTray",
          role: "prototype-primary",
          altIntent: "Khay gốm đá mộc tạo hình tự nhiên trên bàn gỗ.",
          status: "prototype-only"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["volume", "hospitality"],
        customerText: "Cần số lượng cho nhà hàng hoặc quán cà phê? Hãy liên hệ tư vấn."
      },
      related: {
        productFixtureIds: ["simple-in-stock", "vase-dew"],
        caseFixtureIds: [],
        serviceRoute: "custom.html?source=product"
      },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "vase-dew": {
      fixtureId: "vase-dew",
      slug: "binh-hoa-giot-suong",
      truthStatus: "illustrative",
      fixturePurpose: "Bình hoa gốm men mờ để bàn dáng giọt sương.",
      name: {
        short: "Bình Hoa Giọt Sương",
        long: "Bình hoa gốm dáng giọt sương men mờ thanh khiết"
      },
      productType: "Bình hoa để bàn",
      catalogOrder: 5,
      collectionIds: ["goc-nha", "qua-tang"],
      useCases: ["home-decor", "housewarming-gift"],
      keywords: ["bình hoa", "giọt sương", "gốm", "trang trí"],
      retailEligibility: "retail",
      catalogPrice: {
        type: "single",
        amountVnd: 750000
      },
      defaultVariantId: "suong-mo",
      options: [],
      variants: [
        {
          id: "suong-mo",
          label: "Men sương trắng ngà",
          optionValues: {},
          sku: "HEDY-DEMO-BHGS",
          priceVnd: 750000,
          inventory: {
            state: "in-stock",
            sellableQuantity: 5,
            quantityStatus: "illustrative"
          },
          leadTime: {
            status: "ready",
            customerText: "Sẵn sàng gửi trong 1-2 ngày."
          },
          primaryAssetId: "productVaseDew",
          retailEligibility: "retail"
        }
      ],
      description: {
        short: "Dáng bình thon thả như giọt sương mai đọng lại, tôn lên nét thanh tao của từng nhành hoa cỏ.",
        long: "Chế tác vuốt tay mộc mạc với lớp men trắng ngà dịu mắt, hòa hợp tự nhiên vào bất kỳ góc bàn hay bệ cửa sổ nào."
      },
      facts: {
        dimensions: {
          customerText: "Đường kính đáy 11 cm · cao 19 cm",
          status: "illustrative"
        },
        packedShippingProfile: {
          id: "vase-parcel",
          weightGrams: 920,
          fragile: true,
          parcelRule: "one-parcel",
          status: "illustrative"
        },
        material: "Gốm cao lanh nung mộc",
        finish: "Men mờ mịn tay",
        useRestrictions: "Chứa nước cắm hoa tươi hoặc cắm hoa khô.",
        care: "Tránh va đập mạnh.",
        handmadeVariation: "Độ thon và đốm men tự nhiên thay đổi nhẹ theo mẻ nung.",
        packaging: "Hộp giấy kraft định hình chống sốc.",
        policySummary: "Đảm bảo nguyên vẹn khi giao tới tay khách hàng."
      },
      media: [
        {
          assetId: "productVaseDew",
          role: "prototype-primary",
          altIntent: "Bình hoa giọt sương men mờ cắm cành hoa khô.",
          status: "prototype-only"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["volume"],
        customerText: "Đặt số lượng lớn cho sự kiện hoặc không gian sống? Trao đổi cùng HEDY."
      },
      related: {
        productFixtureIds: ["fragile-large", "tray-stone"],
        caseFixtureIds: [],
        serviceRoute: "custom.html?source=product"
      },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "gift-calm": {
      fixtureId: "gift-calm",
      slug: "set-qua-tinh-lang",
      truthStatus: "illustrative",
      fixturePurpose: "Set quà tặng gốm thủ công và khoảnh khắc thư thái.",
      name: {
        short: "Set Quà Tĩnh Lặng",
        long: "Hộp quà gốm thủ công kết hợp tách trà và thảo mộc"
      },
      productType: "Hộp quà tặng",
      catalogOrder: 6,
      collectionIds: ["qua-tang", "ban-an"],
      useCases: ["housewarming-gift", "couple-gift", "volume-gift"],
      keywords: ["quà tặng", "set quà", "tĩnh lặng", "hộp quà"],
      retailEligibility: "retail",
      catalogPrice: {
        type: "single",
        amountVnd: 1150000
      },
      defaultVariantId: "hop-qua",
      options: [],
      variants: [
        {
          id: "hop-qua",
          label: "Hộp quà tiêu chuẩn",
          optionValues: {},
          sku: "HEDY-DEMO-SQTL",
          priceVnd: 1150000,
          inventory: {
            state: "in-stock",
            sellableQuantity: 6,
            quantityStatus: "illustrative"
          },
          leadTime: {
            status: "ready",
            customerText: "Đóng gói gửi đi trong 1-2 ngày."
          },
          primaryAssetId: "img2",
          retailEligibility: "retail"
        }
      ],
      description: {
        short: "Gói ghém chiếc tách gốm mộc, đĩa nhỏ và nhành khuynh diệp sấy khô trong hộp quà trang nhã.",
        long: "Lựa chọn trọn vẹn để gửi gắm lời chúc an yên nhân dịp tân gia, kỷ niệm hay những dịp tri ân đặc biệt."
      },
      facts: {
        dimensions: {
          customerText: "Kích thước hộp: 26 × 26 × 12 cm",
          status: "illustrative"
        },
        packedShippingProfile: {
          id: "gift-box-large",
          weightGrams: 1600,
          fragile: true,
          parcelRule: "one-parcel",
          status: "illustrative"
        },
        material: "Gốm đá thủ công, hộp kraft định hình cao cấp",
        finish: "Men mờ ấm cúng",
        useRestrictions: "Sử dụng hằng ngày.",
        care: "Kèm thiệp hướng dẫn chăm sóc gốm bên trong.",
        handmadeVariation: "Chi tiết thắt nơ và cành hoa sấy điểm xuyết riêng từng hộp.",
        packaging: "Hộp nắp gài buộc nơ đay và thiệp viết tay theo yêu cầu.",
        policySummary: "Hỗ trợ viết thiệp lời chúc miễn phí đi kèm."
      },
      media: [
        {
          assetId: "img2",
          role: "prototype-primary",
          altIntent: "Hộp quà mở với đồ gốm và cành bạch đàn.",
          status: "prototype-only"
        }
      ],
      customEscalation: {
        enabled: true,
        reasons: ["branding", "volume"],
        customerText: "Doanh nghiệp cần in logo lên thiệp và hộp quà? Khám phá dịch vụ đặt riêng."
      },
      related: {
        productFixtureIds: ["mug-sand", "multi-variant"],
        caseFixtureIds: ["corporate-volume"],
        serviceRoute: "custom.html?source=product"
      },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "bowl-earth": {
      fixtureId: "bowl-earth",
      slug: "bo-bat-com-men-moc",
      truthStatus: "illustrative",
      fixturePurpose: "Bộ bát gốm dùng hằng ngày, men khoáng thô mộc.",
      name: { short: "Bộ Bát Cơm Men Mộc", long: "Bộ Bát Cơm Gốm Men Mộc Hai Chiếc" },
      productType: "Bát ăn thường nhật",
      catalogOrder: 9,
      collectionIds: ["ban-an"],
      useCases: ["everyday-table", "housewarming-gift"],
      keywords: ["bát", "chén", "cơm", "bàn ăn", "gốm mộc"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 640000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Tiêu chuẩn", optionValues: {}, sku: "HEDY-DEMO-BCM", priceVnd: 640000, inventory: { state: "in-stock", sellableQuantity: 8, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productBowls", retailEligibility: "retail" }],
      description: { short: "Bộ hai bát cơm đầm tay với sắc men hạt khoáng tự nhiên, giữ trọn hơi ấm bữa cơm gia đình.", long: "Từng chiếc bát được vuốt tay tỉ mỉ, bề mặt men mờ tự nhiên chống trơn trượt và an toàn khi cầm nắm món ăn nóng." },
      facts: { dimensions: { customerText: "Đường kính 11,5 cm · cao 6 cm", status: "illustrative" }, packedShippingProfile: { id: "small-box", weightGrams: 750, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Đất sét chịu nhiệt", finish: "Men hạt thô mộc", useRestrictions: "An toàn tiếp xúc thực phẩm.", care: "Dùng được với nước ấm.", handmadeVariation: "Sắc đốm khoáng thay đổi tự nhiên sau nung.", packaging: "Hộp giấy định hình bảo vệ.", policySummary: "Đổi trả trong 7 ngày." },
      media: [{ assetId: "productBowls", role: "prototype-primary", altIntent: "Hai bát gốm men đốm khoáng xếp chồng trên khăn vải linen tự nhiên.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["volume"], customerText: "Cần đặt số lượng lớn cho gia đình hoặc nhà hàng? Hãy liên hệ tư vấn." },
      related: { productFixtureIds: ["simple-in-stock", "multi-variant"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "plate-oval": {
      fixtureId: "plate-oval",
      slug: "dia-oval-men-tro",
      truthStatus: "illustrative",
      fixturePurpose: "Đĩa oval lớn dùng bày món tiệc hoặc món tráng miệng.",
      name: { short: "Đĩa Oval Men Tro", long: "Đĩa Oval Vuốt Tay Men Tro Trầm Bàn Ăn" },
      productType: "Đĩa dùng bàn tiệc",
      catalogOrder: 10,
      collectionIds: ["ban-an"],
      useCases: ["everyday-table"],
      keywords: ["đĩa", "oval", "men tro", "bàn ăn"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 580000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Tiêu chuẩn", optionValues: {}, sku: "HEDY-DEMO-DOT", priceVnd: 580000, inventory: { state: "in-stock", sellableQuantity: 5, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img1", retailEligibility: "retail" }],
      description: { short: "Dáng oval thanh thoát cùng viền vuốt mộc, tôn vinh thẩm mỹ của từng món ăn trên bàn.", long: "Sắc men tro trầm tĩnh gợi cảm giác gần gũi, phù hợp cho cả bữa ăn gia đình lẫn bàn tiệc chiêu đãi bạn bè." },
      facts: { dimensions: { customerText: "Dài 26 cm · rộng 16 cm · cao 3 cm", status: "illustrative" }, packedShippingProfile: { id: "flat-box", weightGrams: 850, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm chịu nhiệt", finish: "Men tro tự nhiên", useRestrictions: "An toàn tiếp xúc thực phẩm.", care: "Rửa nhẹ tay.", handmadeVariation: "Viền đĩa gợn sóng nhẹ thủ công.", packaging: "Hộp kraft lót rơm.", policySummary: "Bảo hành bể vỡ khi vận chuyển." },
      media: [{ assetId: "img1", role: "prototype-primary", altIntent: "Đĩa và chén gốm trên khay gỗ trang nhã.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["volume"], customerText: "Trao đổi cùng HEDY để đặt phối bộ riêng." },
      related: { productFixtureIds: ["simple-in-stock"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "bowl-soup": {
      fixtureId: "bowl-soup",
      slug: "to-canh-moc-suong",
      truthStatus: "illustrative",
      fixturePurpose: "Tô canh lớn hoặc tô salad gốm mộc.",
      name: { short: "Tô Canh Mộc Sương", long: "Tô Canh Gốm Mộc Sắc Men Sương Khói" },
      productType: "Tô canh lớn",
      catalogOrder: 11,
      collectionIds: ["ban-an"],
      useCases: ["everyday-table"],
      keywords: ["tô", "canh", "bát lớn", "bàn ăn"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 490000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Tiêu chuẩn", optionValues: {}, sku: "HEDY-DEMO-TCS", priceVnd: 490000, inventory: { state: "in-stock", sellableQuantity: 6, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productBowls", retailEligibility: "retail" }],
      description: { short: "Dung tích vừa vặn cho món canh thanh nhẹ, lòng tô sâu vừa phải giữ nhiệt êm ái.", long: "Bề mặt ngoài giữ lại vân vuốt tay của người thợ, mang lại cảm xúc mộc mạc mỗi lần chạm vào." },
      facts: { dimensions: { customerText: "Đường kính 19 cm · cao 8 cm", status: "illustrative" }, packedShippingProfile: { id: "bowl-box", weightGrams: 900, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm nung mẻ nhỏ", finish: "Men mờ mộc", useRestrictions: "Tiếp xúc thực phẩm an toàn.", care: "Lau khô tự nhiên.", handmadeVariation: "Độ đậm nhạt sắc men riêng biệt.", packaging: "Hộp quà HEDY bọc đệm.", policySummary: "Hỗ trợ đổi mới nếu nứt vỡ." },
      media: [{ assetId: "productBowls", role: "prototype-primary", altIntent: "Bát tô gốm mộc tạo hình tự nhiên.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["volume"], customerText: "Liên hệ tư vấn số lượng lớn cho gia đình." },
      related: { productFixtureIds: ["bowl-earth"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "plate-snack": {
      fixtureId: "plate-snack",
      slug: "dia-gia-vi-canh-hoa",
      truthStatus: "illustrative",
      fixturePurpose: "Bộ ba đĩa nhỏ đựng gia vị hoặc mứt bánh.",
      name: { short: "Đĩa Gia Vị Cánh Hoa", long: "Bộ Ba Đĩa Gia Vị Khắc Họa Tiết Cánh Hoa" },
      productType: "Bộ đĩa gia vị",
      catalogOrder: 12,
      collectionIds: ["ban-an"],
      useCases: ["everyday-table", "gift"],
      keywords: ["đĩa nhỏ", "gia vị", "cánh hoa", "bàn ăn"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 360000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Bộ 3 chiếc", optionValues: {}, sku: "HEDY-DEMO-DCH", priceVnd: 360000, inventory: { state: "in-stock", sellableQuantity: 9, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img7", retailEligibility: "retail" }],
      description: { short: "Bộ ba chiếc đĩa nhỏ lấy cảm hứng từ cánh hoa đầu xuân, điểm xuyết nét duyên dáng trên bàn ăn.", long: "Thích hợp đựng các loại nước chấm tinh tế, gừng muối hoặc những phần mứt trà thưởng thức buổi sớm." },
      facts: { dimensions: { customerText: "Đường kính 9 cm · cao 1,8 cm", status: "illustrative" }, packedShippingProfile: { id: "small-set", weightGrams: 400, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Đất sét cao lanh", finish: "Men bóng mờ", useRestrictions: "An toàn thực phẩm.", care: "Dễ vệ sinh.", handmadeVariation: "Nét khắc hoa thủ công từng nét.", packaging: "Hộp giấy thắt dây mộc.", policySummary: "Đổi trả linh hoạt." },
      media: [{ assetId: "img7", role: "prototype-primary", altIntent: "Bộ tách đĩa họa tiết hoa văn gốm thủ công.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["gift"], customerText: "Làm quà tặng kèm ý nghĩa cho bạn bè." },
      related: { productFixtureIds: ["simple-in-stock"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "pot-casserole": {
      fixtureId: "pot-casserole",
      slug: "tho-com-gom-co-nap",
      truthStatus: "illustrative",
      fixturePurpose: "Thố cơm giữ nhiệt có nắp gốm đất nung dày.",
      name: { short: "Thố Cơm Gốm Có Nắp", long: "Thố Cơm Gốm Mộc Có Nắp Đất Sét Nung Nhiệt Cao" },
      productType: "Thố gốm bàn ăn",
      catalogOrder: 13,
      collectionIds: ["ban-an"],
      useCases: ["everyday-table"],
      keywords: ["thố", "nồi gốm", "có nắp", "cơm", "bàn ăn"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 890000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Tiêu chuẩn", optionValues: {}, sku: "HEDY-DEMO-TCG", priceVnd: 890000, inventory: { state: "in-stock", sellableQuantity: 4, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productBowls", retailEligibility: "retail" }],
      description: { short: "Thố gốm dày dặn giữ trọn hương vị gạo mới, nắp đậy khít giữ nhiệt ấm lâu cho bữa cơm.", long: "Chế tác từ chất đất sét giàu khoáng nung ở nhiệt độ cao, an toàn tuyệt đối và bền vững qua năm tháng." },
      facts: { dimensions: { customerText: "Đường kính 20 cm · cao 12 cm", status: "illustrative" }, packedShippingProfile: { id: "heavy-box", weightGrams: 1800, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm chịu nhiệt cao", finish: "Men đất tự nhiên", useRestrictions: "Dùng để đựng cơm, canh nóng.", care: "Tránh sốc nhiệt đột ngột.", handmadeVariation: "Quai núm nắp nắn tay tự nhiên.", packaging: "Hộp bọc xốp định hình.", policySummary: "Bảo hành 12 tháng." },
      media: [{ assetId: "productBowls", role: "prototype-primary", altIntent: "Thố gốm mộc đựng món ăn giữ nhiệt.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["volume"], customerText: "Tư vấn bộ đồ gốm bàn ăn đồng bộ cùng HEDY." },
      related: { productFixtureIds: ["bowl-earth"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "tea-set-zen": {
      fixtureId: "tea-set-zen",
      slug: "bo-am-chen-tra-tinh",
      truthStatus: "illustrative",
      fixturePurpose: "Bộ ấm trà thủ công kèm 2 chén thưởng trà.",
      name: { short: "Bộ Ấm Chén Trà Tĩnh", long: "Bộ Ấm Trà Gốm Đá Men Hạt Kèm Hai Chén" },
      productType: "Bộ ấm trà",
      catalogOrder: 14,
      collectionIds: ["ban-an", "am-chen", "qua-tang"],
      useCases: ["tea-ritual", "gift"],
      keywords: ["ấm trà", "chén trà", "bộ trà", "uống trà", "ấm chén"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 1250000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "1 ấm + 2 chén", optionValues: {}, sku: "HEDY-DEMO-BTT", priceVnd: 1250000, inventory: { state: "in-stock", sellableQuantity: 5, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productTeaSet", retailEligibility: "retail" }],
      description: { short: "Chiếc ấm vuốt tay dáng tròn đầm ấm cùng dòng nước êm, khơi mở khoảng lặng bình yên bên chén trà.", long: "Lớp men hạt đốm ấm áp ôm ấp từng ngụm trà nóng, giữ nhiệt ổn định để hương vị trà được bung tỏa trọn vẹn." },
      facts: { dimensions: { customerText: "Ấm 280 ml · chén 75 ml", status: "illustrative" }, packedShippingProfile: { id: "tea-box", weightGrams: 1100, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá giữ nhiệt", finish: "Men hạt mộc mạc", useRestrictions: "Chuyên dụng pha trà.", care: "Tráng nước sôi trước khi dùng.", handmadeVariation: "Vòi ấm chuốt tay tạo dòng rót êm mượt.", packaging: "Hộp quà lót rơm cao cấp.", policySummary: "Đổi mới nếu lỗi dòng rót." },
      media: [{ assetId: "productTeaSet", role: "prototype-primary", altIntent: "Bộ ấm chén gốm mộc vuốt tay men hạt ấm cúng trên bàn gỗ mộc.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding", "gift"], customerText: "Khắc tên hoặc dấu riêng lên thân ấm trà? Trao đổi cùng HEDY." },
      related: { productFixtureIds: ["mug-sand", "gift-calm"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "tea-pot-side": {
      fixtureId: "tea-pot-side",
      slug: "am-tra-quai-ngang",
      truthStatus: "illustrative",
      fixturePurpose: "Ấm trà quai ngang truyền thống chuẩn trà đạo.",
      name: { short: "Ấm Trà Quai Ngang", long: "Ấm Trà Quai Ngang Men Tro Cổ Điển" },
      productType: "Ấm trà quai ngang",
      catalogOrder: 15,
      collectionIds: ["ban-an", "am-chen"],
      useCases: ["tea-ritual"],
      keywords: ["ấm trà", "quai ngang", "trà đạo", "ấm chén"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 850000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Dung tích 220ml", optionValues: {}, sku: "HEDY-DEMO-ATQ", priceVnd: 850000, inventory: { state: "in-stock", sellableQuantity: 4, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productTeaSet", retailEligibility: "retail" }],
      description: { short: "Dáng quai ngang chuẩn xác trợ lực khi rót, giúp cổ tay thư thái trong từng cử chỉ pha trà.", long: "Lưới lọc gốm khoét lỗ thủ công bên trong giữ lại bã trà sạch sẽ, cho chén nước trà trong veo và thơm ngát." },
      facts: { dimensions: { customerText: "Dung tích 220 ml · dài quai 7 cm", status: "illustrative" }, packedShippingProfile: { id: "pot-box", weightGrams: 650, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm nung củi nhiệt cao", finish: "Men tro mờ", useRestrictions: "Dùng pha trà khô, trà hoa.", care: "Không dùng hóa chất tẩy rửa.", handmadeVariation: "Góc quai được cân chỉnh riêng.", packaging: "Hộp giấy kraft định hình.", policySummary: "Bảo hành 1 đổi 1 lỗi nứt rò." },
      media: [{ assetId: "productTeaSet", role: "prototype-primary", altIntent: "Ấm trà gốm mộc quai ngang trên bàn trà.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["tea"], customerText: "Tư vấn chọn ấm trà phù hợp với loại trà bạn yêu thích." },
      related: { productFixtureIds: ["tea-set-zen"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "cup-tasting": {
      fixtureId: "cup-tasting",
      slug: "bo-tach-thuong-tra",
      truthStatus: "illustrative",
      fixturePurpose: "Bộ bốn tách thưởng trà gốm mỏng nhẹ.",
      name: { short: "Bộ Tách Thưởng Trà", long: "Bộ Tách Thưởng Trà Gốm Hoạ Tiết Thủ Công" },
      productType: "Tách trà",
      catalogOrder: 16,
      collectionIds: ["ban-an", "am-chen"],
      useCases: ["tea-ritual", "gift"],
      keywords: ["chén trà", "tách trà", "bộ tách", "ấm chén"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 520000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Bộ 4 chén", optionValues: {}, sku: "HEDY-DEMO-BTT4", priceVnd: 520000, inventory: { state: "in-stock", sellableQuantity: 7, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img7", retailEligibility: "retail" }],
      description: { short: "Thành chén mỏng vừa đủ chạm môi êm ái, màu men sáng tôn vinh sắc nước trà trong trẻo.", long: "Bộ bốn chén dành cho những buổi tao ngộ cùng tri kỷ, sẻ chia chén trà sớm trong ánh nắng mai." },
      facts: { dimensions: { customerText: "Đường kính 6,5 cm · cao 4,5 cm", status: "illustrative" }, packedShippingProfile: { id: "cups-box", weightGrams: 500, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Cao lanh tinh luyện", finish: "Men bóng mờ họa tiết", useRestrictions: "Thưởng trà nóng.", care: "Tráng nước ấm.", handmadeVariation: "Nét cọ vẽ men tự do không lặp lại.", packaging: "Hộp quà HEDY trang nhã.", policySummary: "Đổi trả linh hoạt trong 7 ngày." },
      media: [{ assetId: "img7", role: "prototype-primary", altIntent: "Tách gốm vẽ hoa thủ công tinh tế.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["gift"], customerText: "Set quà tặng tri ân trang trọng." },
      related: { productFixtureIds: ["tea-set-zen"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "mug-handle": {
      fixtureId: "mug-handle",
      slug: "coc-ca-phe-quai-vuot",
      truthStatus: "illustrative",
      fixturePurpose: "Cốc uống cà phê hoặc trà dung tích vừa phải.",
      name: { short: "Cốc Cà Phê Quai Vuốt", long: "Cốc Cà Phê Quai Vuốt Men Mờ Đầm Tay" },
      productType: "Cốc gốm uống nước",
      catalogOrder: 17,
      collectionIds: ["ban-an", "am-chen"],
      useCases: ["everyday-table", "desk"],
      keywords: ["cốc", "ly", "cà phê", "quai", "ấm chén"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 350000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Dung tích 300ml", optionValues: {}, sku: "HEDY-DEMO-CCV", priceVnd: 350000, inventory: { state: "in-stock", sellableQuantity: 10, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productMug", retailEligibility: "retail" }],
      description: { short: "Quai cốc được vuốt cong mềm mại vừa vặn hai ngón tay, mang lại cảm giác nâng niu mỗi sáng.", long: "Thân cốc vuốt gợn tạo điểm bám vững chãi, chất gốm dày giữ ấm thức uống lâu hơn." },
      facts: { dimensions: { customerText: "Đường kính 8,5 cm · cao 9 cm · 300 ml", status: "illustrative" }, packedShippingProfile: { id: "mug-box", weightGrams: 450, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá", finish: "Men kem mờ", useRestrictions: "Thức uống nóng/lạnh.", care: "Vệ sinh nhẹ nhàng.", handmadeVariation: "Vết vân vuốt tay độc bản.", packaging: "Hộp kraft lót giấy rơm.", policySummary: "Bảo hành vận chuyển an toàn." },
      media: [{ assetId: "productMug", role: "prototype-primary", altIntent: "Cốc gốm cà phê quai vuốt tay mộc mạc.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding"], customerText: "In ấn logo thương hiệu cho quán cà phê hoặc văn phòng." },
      related: { productFixtureIds: ["mug-sand"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "tea-pitcher": {
      fixtureId: "tea-pitcher",
      slug: "chuyen-tra-thuy-tho",
      truthStatus: "illustrative",
      fixturePurpose: "Dụng cụ rót trà đều hương vị trước khi chia chén.",
      name: { short: "Chuyên Trà Thủy Thổ", long: "Chuyên Rót Trà Gốm Đá Miệng Nhọn Vuốt Tay" },
      productType: "Dụng cụ trà",
      catalogOrder: 18,
      collectionIds: ["ban-an", "am-chen"],
      useCases: ["tea-ritual"],
      keywords: ["chuyên trà", "tống trà", "rót trà", "ấm chén"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 460000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Dung tích 240ml", optionValues: {}, sku: "HEDY-DEMO-CTT", priceVnd: 460000, inventory: { state: "in-stock", sellableQuantity: 6, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productTeaSet", retailEligibility: "retail" }],
      description: { short: "Miệng rót cắt dòng ngắt giọt sắc sảo, giúp nước trà chuyển ly mà không nhỏ giọt ra bàn.", long: "Một món phụ kiện không thể thiếu trong bàn trà tươm tất, giúp làm đều độ đậm nhạt của ấm trà." },
      facts: { dimensions: { customerText: "Dung tích 240 ml · cao 7,5 cm", status: "illustrative" }, packedShippingProfile: { id: "pitcher-box", weightGrams: 400, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm chịu nhiệt", finish: "Men hạt mờ", useRestrictions: "Chuyên dụng chia trà.", care: "Rửa với nước sôi.", handmadeVariation: "Độ uốn của mỏ chim cắt giọt.", packaging: "Hộp bảo vệ.", policySummary: "Đổi mới nếu tắc dòng." },
      media: [{ assetId: "productTeaSet", role: "prototype-primary", altIntent: "Chuyên rót trà gốm mộc thanh tao.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["tea"], customerText: "Phối bộ ấm chuyên đồng chất men cùng HEDY." },
      related: { productFixtureIds: ["tea-set-zen"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "tea-caddy": {
      fixtureId: "tea-caddy",
      slug: "hu-dung-tra-nap-go",
      truthStatus: "illustrative",
      fixturePurpose: "Hũ gốm giữ trọn hương trà thơm lâu.",
      name: { short: "Hũ Đựng Trà Nắp Gỗ", long: "Hũ Gốm Giữ Hương Trà Nắp Gỗ Khắc Kín Khí" },
      productType: "Hũ đựng trà",
      catalogOrder: 19,
      collectionIds: ["ban-an", "am-chen", "qua-tang"],
      useCases: ["tea-ritual", "home-decor", "gift"],
      keywords: ["hũ trà", "đựng trà", "nắp gỗ", "ấm chén"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 420000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Dung tích 150g trà", optionValues: {}, sku: "HEDY-DEMO-HDT", priceVnd: 420000, inventory: { state: "in-stock", sellableQuantity: 5, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img2", retailEligibility: "retail" }],
      description: { short: "Nắp gỗ tự nhiên lót gioăng kín hơi bảo vệ những búp trà quý khỏi ẩm mốc và mất hương.", long: "Dáng hũ tròn đầy đặn mang ý nghĩa tích tụ sinh khí và tài lộc cho gia chủ, tạo điểm nhấn đẹp trên bàn trà." },
      facts: { dimensions: { customerText: "Đường kính 9,5 cm · cao 11 cm", status: "illustrative" }, packedShippingProfile: { id: "caddy-box", weightGrams: 600, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá & gỗ tần bì", finish: "Men tro mộc mạc", useRestrictions: "Bảo quản trà khô, thảo mộc.", care: "Tránh ngâm nắp gỗ trong nước.", handmadeVariation: "Vân gỗ và sắc men độc bản.", packaging: "Hộp quà thắt nơ.", policySummary: "Bảo hành độ kín nắp." },
      media: [{ assetId: "img2", role: "prototype-primary", altIntent: "Hũ gốm nắp gỗ đựng trà thơm mộc mạc.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding", "gift"], customerText: "Khắc logo thương hiệu lên nắp gỗ làm quà tặng sự kiện." },
      related: { productFixtureIds: ["tea-set-zen"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "tumbler-fire": {
      fixtureId: "tumbler-fire",
      slug: "ly-gom-men-hoa-bien",
      truthStatus: "illustrative",
      fixturePurpose: "Ly không quai men hỏa biến sắc thái tự nhiên.",
      name: { short: "Ly Gốm Men Hỏa Biến", long: "Ly Gốm Không Quai Men Hỏa Biến Sắc Đêm" },
      productType: "Ly gốm",
      catalogOrder: 20,
      collectionIds: ["ban-an", "am-chen"],
      useCases: ["everyday-table", "tea-ritual"],
      keywords: ["ly", "cốc", "hỏa biến", "ấm chén"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 380000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Dung tích 250ml", optionValues: {}, sku: "HEDY-DEMO-LHB", priceVnd: 380000, inventory: { state: "in-stock", sellableQuantity: 8, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productMug", retailEligibility: "retail" }],
      description: { short: "Hiệu ứng lửa nung tạo nên những vệt sắc thái huyền ảo không chiếc nào giống chiếc nào.", long: "Cầm trên tay ly gốm men hỏa biến là ôm trọn sự ngẫu hứng kỳ diệu của lửa và đất mẹ trong lò nung." },
      facts: { dimensions: { customerText: "Đường kính 7,8 cm · cao 8,5 cm", status: "illustrative" }, packedShippingProfile: { id: "cup-box", weightGrams: 350, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm chịu nhiệt", finish: "Men hỏa biến thủ công", useRestrictions: "Đồ uống nóng lạnh.", care: "Dùng vải mềm lau.", handmadeVariation: "Mỗi chiếc có hoa văn men lửa khác nhau.", packaging: "Hộp quà mộc.", policySummary: "Đổi trả linh hoạt." },
      media: [{ assetId: "productMug", role: "prototype-primary", altIntent: "Ly gốm men hỏa biến huyền bí và độc bản.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["volume"], customerText: "Tuyển tập độc bản cho không gian thưởng thức." },
      related: { productFixtureIds: ["mug-sand"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "vase-decor": {
      fixtureId: "vase-decor",
      slug: "binh-hoa-mieng-nghieng",
      truthStatus: "illustrative",
      fixturePurpose: "Bình hoa gốm trang trí dáng nghiêng wabi-sabi.",
      name: { short: "Bình Hoa Miệng Nghiêng", long: "Bình Hoa Gốm Wabi-Sabi Miệng Nghiêng Tự Nhiên" },
      productType: "Bình hoa gốm",
      catalogOrder: 21,
      collectionIds: ["goc-nha"],
      useCases: ["home-decor", "gift"],
      keywords: ["bình hoa", "lọ hoa", "trang trí", "wabi-sabi", "góc nhà"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 960000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Tiêu chuẩn", optionValues: {}, sku: "HEDY-DEMO-BHMN", priceVnd: 960000, inventory: { state: "in-stock", sellableQuantity: 4, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productVaseDecor", retailEligibility: "retail" }],
      description: { short: "Đường nét bất đối xứng gợi vẻ đẹp thô mộc của đá núi, ôm ấp nhành hoa khô hay cành lá xanh.", long: "Chất men cát nhám mịn bắt sáng dịu dàng, tạo nên góc nhìn lắng đọng trong không gian phòng khách hoặc góc làm việc." },
      facts: { dimensions: { customerText: "Chiều cao 19 cm · đường kính thân 15 cm", status: "illustrative" }, packedShippingProfile: { id: "vase-box", weightGrams: 1400, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá đầm tay", finish: "Men nhám thô wabi-sabi", useRestrictions: "Cắm hoa tươi (chứa nước an toàn) hoặc hoa khô.", care: "Tránh va chạm mạnh.", handmadeVariation: "Độ nghiêng miệng bình tạo tác ngẫu hứng.", packaging: "Hộp bảo vệ 3 lớp.", policySummary: "Bảo hiểm 100% bể vỡ giao hàng." },
      media: [{ assetId: "productVaseDecor", role: "prototype-primary", altIntent: "Bình hoa gốm mộc tạo hình wabi-sabi mộc mạc cắm cành hoa khô.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["interior"], customerText: "Thiết kế mẫu bình theo kích thước và bảng màu nội thất." },
      related: { productFixtureIds: ["fragile-large", "vase-dew"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "vase-tall": {
      fixtureId: "vase-tall",
      slug: "binh-gom-co-thon",
      truthStatus: "illustrative",
      fixturePurpose: "Bình gốm cao cắm cành dài hoặc để bàn lớn.",
      name: { short: "Bình Gốm Cổ Thon", long: "Bình Gốm Cổ Thon Men Rạn Mộc Điểm Xuyết Góc Phòng" },
      productType: "Bình cắm cành cao",
      catalogOrder: 22,
      collectionIds: ["goc-nha"],
      useCases: ["home-decor"],
      keywords: ["bình gốm", "cổ thon", "trang trí", "cắm cành", "góc nhà"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 1150000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Cao 28cm", optionValues: {}, sku: "HEDY-DEMO-BCT", priceVnd: 1150000, inventory: { state: "in-stock", sellableQuantity: 3, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img3", retailEligibility: "retail" }],
      description: { short: "Dáng bình vút cao thanh mảnh, thích hợp cắm những cành mận, cành đào hay cành lựu buông lơi.", long: "Lớp men rạn nhẹ phảng phất dấu ấn thời gian, điểm xuyết nét hoài niệm và bình yên cho gian phòng." },
      facts: { dimensions: { customerText: "Cao 28 cm · đáy 12 cm · miệng 4,5 cm", status: "illustrative" }, packedShippingProfile: { id: "tall-box", weightGrams: 1700, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm thủ công", finish: "Men rạn cổ điển", useRestrictions: "Chứa nước an toàn.", care: "Rửa với cọ mềm.", handmadeVariation: "Vân rạn tự nhiên theo từng đợt nung.", packaging: "Hộp xốp định hình.", policySummary: "Bảo hành giao hàng nguyên vẹn." },
      media: [{ assetId: "img3", role: "prototype-primary", altIntent: "Bình gốm màu kem cắm hoa vàng trang nhã.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["interior"], customerText: "Tư vấn bình gốm trang trí cho biệt thự hoặc resort." },
      related: { productFixtureIds: ["fragile-large"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "holder-candle": {
      fixtureId: "holder-candle",
      slug: "chan-nen-xep-tang",
      truthStatus: "illustrative",
      fixturePurpose: "Chân nến gốm mộc điêu khắc xếp tầng tối giản.",
      name: { short: "Chân Nến Xếp Tầng", long: "Chân Nến Gốm Mộc Tạo Dáng Xếp Tầng Điêu Khắc" },
      productType: "Phụ kiện trang trí",
      catalogOrder: 23,
      collectionIds: ["goc-nha"],
      useCases: ["home-decor", "gift"],
      keywords: ["chân nến", "nến thơm", "trang trí", "góc nhà"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 450000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Tiêu chuẩn", optionValues: {}, sku: "HEDY-DEMO-CNXT", priceVnd: 450000, inventory: { state: "in-stock", sellableQuantity: 6, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productVaseDecor", retailEligibility: "retail" }],
      description: { short: "Khối gốm bậc thang nâng niu ánh nến ấm, mang lại bầu không khí lãng mạn cho buổi tối sum họp.", long: "Thiết kế đầm tay vững chãi giữ an toàn cho ngọn nến, dễ dàng làm sạch sáp nến thừa sau khi sử dụng." },
      facts: { dimensions: { customerText: "Đường kính đáy 10 cm · cao 6,5 cm", status: "illustrative" }, packedShippingProfile: { id: "candle-box", weightGrams: 550, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm chịu nhiệt", finish: "Men khoáng mờ", useRestrictions: "Dùng với nến trụ hoặc nến cây.", care: "Gỡ sáp nến nhẹ tay.", handmadeVariation: "Gờ bậc thang chuốt tay.", packaging: "Hộp quà nhỏ.", policySummary: "Đổi trả 7 ngày." },
      media: [{ assetId: "productVaseDecor", role: "prototype-primary", altIntent: "Chân nến gốm mộc tạo hình tối giản ấm cúng.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["gift"], customerText: "Quà tặng nhỏ ấm áp cho các dịp lễ kỷ niệm." },
      related: { productFixtureIds: ["vase-dew"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "holder-incense": {
      fixtureId: "holder-incense",
      slug: "lu-xong-tram-men-da",
      truthStatus: "illustrative",
      fixturePurpose: "Lư xông trầm tròn gốm đá giữ an yên không gian.",
      name: { short: "Lư Xông Trầm Men Đá", long: "Lư Xông Trầm Tròn Gốm Đá Men Mờ Thoát Khói" },
      productType: "Vật phẩm tĩnh tâm",
      catalogOrder: 24,
      collectionIds: ["goc-nha"],
      useCases: ["home-decor", "relaxation"],
      keywords: ["lư trầm", "xông trầm", "trầm hương", "trang trí", "góc nhà"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 620000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Kèm đế chống cháy", optionValues: {}, sku: "HEDY-DEMO-LXTD", priceVnd: 620000, inventory: { state: "in-stock", sellableQuantity: 5, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productTray", retailEligibility: "retail" }],
      description: { short: "Làn khói trầm thoát nhẹ qua khe nắp gốm đục lỗ tỉ mỉ, thanh lọc năng lượng cho gian phòng.", long: "Chất đất đá giữ nhiệt tốt, bên trong lót lớp nỉ chống cháy chuyên dụng cho nụ trầm và nhang vòng." },
      facts: { dimensions: { customerText: "Đường kính 11 cm · cao 8 cm", status: "illustrative" }, packedShippingProfile: { id: "incense-box", weightGrams: 700, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm chịu nhiệt cao", finish: "Men đá tự nhiên", useRestrictions: "Đốt trầm nụ, trầm vòng.", care: "Lau sạch tàn nhang định kỳ.", handmadeVariation: "Họa tiết lỗ thoát khói khắc tay.", packaging: "Hộp quà lót nhung.", policySummary: "Bảo hành rạn nứt do nhiệt." },
      media: [{ assetId: "productTray", role: "prototype-primary", altIntent: "Lư xông trầm gốm mộc an yên và tĩnh lặng.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["gift"], customerText: "Set quà tặng tĩnh tâm thư giãn." },
      related: { productFixtureIds: ["tray-stone"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "sculpt-vessel": {
      fixtureId: "sculpt-vessel",
      slug: "khay-dieu-khac-trung-bay",
      truthStatus: "illustrative",
      fixturePurpose: "Khay đĩa gốm nghệ thuật trưng bày bàn trà hoặc kệ sách.",
      name: { short: "Khay Điêu Khắc Trưng Bày", long: "Khay Gốm Điêu Khắc Trưng Bày Không Gian Sống" },
      productType: "Đồ gốm trang trí",
      catalogOrder: 25,
      collectionIds: ["goc-nha"],
      useCases: ["home-decor"],
      keywords: ["khay trang trí", "điêu khắc", "gốm nghệ thuật", "góc nhà"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 1400000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Tiêu chuẩn", optionValues: {}, sku: "HEDY-DEMO-KDK", priceVnd: 1400000, inventory: { state: "in-stock", sellableQuantity: 3, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productTray", retailEligibility: "retail" }],
      description: { short: "Tác phẩm gốm mộc nguyên bản mang hơi thở nghệ thuật điêu khắc, tôn vinh gu thẩm mỹ gia chủ.", long: "Mỗi đường gấp nếp và độ uốn tự nhiên kể lại câu chuyện của bàn tay người nghệ nhân trên khối đất mộc." },
      facts: { dimensions: { customerText: "Dài 32 cm · rộng 22 cm · cao 5 cm", status: "illustrative" }, packedShippingProfile: { id: "art-box", weightGrams: 1900, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm điêu khắc độc bản", finish: "Men khoáng nguyên khoáng", useRestrictions: "Trưng bày hoặc đựng quả khô.", care: "Lau bụi bằng khăn mềm.", handmadeVariation: "Tạo tác thủ công độc bản.", packaging: "Thùng gỗ chống sốc cao cấp.", policySummary: "Bảo hiểm độc bản." },
      media: [{ assetId: "productTray", role: "prototype-primary", altIntent: "Khay gốm nghệ thuật tạo hình điêu khắc ấn tượng.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["interior"], customerText: "Đặt tác phẩm kích thước lớn cho tiền sảnh hoặc đại sảnh." },
      related: { productFixtureIds: ["tray-stone"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "plate-display": {
      fixtureId: "plate-display",
      slug: "dia-trung-bay-hoa-tiet-la",
      truthStatus: "illustrative",
      fixturePurpose: "Đĩa gốm tròn khắc hoa văn lá trang trí kệ tủ.",
      name: { short: "Đĩa Trưng Bày Họa Tiết Lá", long: "Đĩa Gốm Trưng Bày Khắc Tay Chìm Họa Tiết Lá" },
      productType: "Đĩa trang trí",
      catalogOrder: 26,
      collectionIds: ["goc-nha"],
      useCases: ["home-decor"],
      keywords: ["đĩa trưng bày", "họa tiết lá", "trang trí", "góc nhà"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 720000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Đường kính 25cm", optionValues: {}, sku: "HEDY-DEMO-DTBL", priceVnd: 720000, inventory: { state: "in-stock", sellableQuantity: 4, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img5", retailEligibility: "retail" }],
      description: { short: "Họa tiết cành lá khắc chìm mềm mại như một bức tranh thu nhỏ từ thiên nhiên trên nền gốm mộc.", long: "Kèm chân đế gỗ tự nhiên để gia chủ dễ dàng bài trí trên bàn trà, kệ sách hoặc tủ console phòng khách." },
      facts: { dimensions: { customerText: "Đường kính 25 cm · kèm chân đế gỗ", status: "illustrative" }, packedShippingProfile: { id: "display-box", weightGrams: 1200, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm nung men tro", finish: "Khắc tay chìm", useRestrictions: "Trưng bày nội thất.", care: "Tránh cọ rửa mạnh.", handmadeVariation: "Nét chạm khắc thủ công.", packaging: "Hộp quà bọc vải.", policySummary: "Bảo hành hoàn thiện 12 tháng." },
      media: [{ assetId: "img5", role: "prototype-primary", altIntent: "Đĩa gốm khắc họa tiết lá trưng bày trang nhã.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["gift"], customerText: "Khắc dấu chúc mừng tân gia hoặc kỷ niệm ngày cưới." },
      related: { productFixtureIds: ["simple-in-stock"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "gift-tea": {
      fixtureId: "gift-tea",
      slug: "set-qua-tra-thuong-som-mai",
      truthStatus: "illustrative",
      fixturePurpose: "Set quà tặng cao cấp gồm bộ ấm chén và hũ trà thượng hạng.",
      name: { short: "Set Quà Trà Thưởng", long: "Hộp Quà Trà Thưởng Sớm Mai Gốm Đá & Trà Mộc" },
      productType: "Bộ quà tặng cao cấp",
      catalogOrder: 27,
      collectionIds: ["qua-tang", "am-chen"],
      useCases: ["gift", "tea-ritual"],
      keywords: ["quà tặng", "set quà trà", "hộp quà", "tri ân"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 1680000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Hộp quà đầy đủ", optionValues: {}, sku: "HEDY-DEMO-SQTT", priceVnd: 1680000, inventory: { state: "in-stock", sellableQuantity: 4, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productTeaSet", retailEligibility: "retail" }],
      description: { short: "Trọn vẹn tình thân trong hộp quà ấm áp gồm ấm trà gốm mộc, hai chén và hũ trà hoa thượng hạng.", long: "Được đóng gói công phu trong hộp quà ép kim HEDY, kèm thiệp viết tay và dải nơ linen mộc mạc." },
      facts: { dimensions: { customerText: "Kích thước hộp: 30 × 24 × 12 cm", status: "illustrative" }, packedShippingProfile: { id: "luxury-gift-box", weightGrams: 2100, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá cao cấp & trà hoa tự nhiên", finish: "Đóng gói sang trọng", useRestrictions: "Quà tặng sự kiện, tân gia, tri ân đối tác.", care: "Bảo quản nơi khô ráo.", handmadeVariation: "Thắt nơ thủ công từng hộp.", packaging: "Hộp quà cứng nam châm ép kim HEDY.", policySummary: "Miễn phí in thiệp viết tay theo yêu cầu." },
      media: [{ assetId: "productTeaSet", role: "prototype-primary", altIntent: "Hộp quà trà thưởng gốm mộc trang trọng và tinh tế.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding", "volume"], customerText: "Đặt số lượng lớn cho doanh nghiệp kèm khắc logo? Liên hệ ngay." },
      related: { productFixtureIds: ["gift-calm", "tea-set-zen"], caseFixtureIds: ["corporate-volume"], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "gift-linen": {
      fixtureId: "gift-linen",
      slug: "set-qua-gom-va-linen",
      truthStatus: "illustrative",
      fixturePurpose: "Set quà tặng đôi cốc gốm và khăn linen mộc mạc.",
      name: { short: "Set Quà Gốm & Linen", long: "Hộp Quà Gỗ Cặp Cốc Gốm & Khăn Linen Tự Nhiên" },
      productType: "Hộp quà thủ công",
      catalogOrder: 28,
      collectionIds: ["qua-tang"],
      useCases: ["gift"],
      keywords: ["quà tặng", "cặp cốc", "khăn linen", "quà cưới", "quà sinh nhật"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 850000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Hộp gỗ đầy đủ", optionValues: {}, sku: "HEDY-DEMO-SQGL", priceVnd: 850000, inventory: { state: "in-stock", sellableQuantity: 6, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productGiftLinen", retailEligibility: "retail" }],
      description: { short: "Hộp gỗ mộc mạc chứa đựng đôi tách gốm ấm áp và chiếc khăn vải linen dệt thô mộc, gửi gắm lời chúc bình dị.", long: "Thích hợp làm quà sinh nhật, quà cảm ơn hoặc món quà ấm áp dành tặng bạn bè, người thương." },
      facts: { dimensions: { customerText: "Hộp gỗ: 20 × 20 × 10 cm", status: "illustrative" }, packedShippingProfile: { id: "wooden-box", weightGrams: 1200, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá & khăn linen dệt tay", finish: "Mộc tự nhiên", useRestrictions: "Sử dụng hằng ngày.", care: "Khăn giặt nước mát.", handmadeVariation: "Vân gỗ và chất gốm mộc tự nhiên.", packaging: "Hộp gỗ thông nắp trượt bọc nơ đay.", policySummary: "Đổi mới nếu lỗi trong 7 ngày." },
      media: [{ assetId: "productGiftLinen", role: "prototype-primary", altIntent: "Hộp quà gỗ gốm thủ công kèm hũ trà hoa khô bọc nơ vải linen thắt tay.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding"], customerText: "Khắc laser tên hoặc logo lên nắp hộp gỗ." },
      related: { productFixtureIds: ["mug-sand"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "gift-housewarming": {
      fixtureId: "gift-housewarming",
      slug: "hop-qua-tan-gia-sung-tuc",
      truthStatus: "illustrative",
      fixturePurpose: "Set quà tân gia cao cấp gồm đĩa, bát và đôi đũa gỗ mun.",
      name: { short: "Hộp Quà Tân Gia", long: "Hộp Quà Gốm Bàn Ăn Tân Gia Sung Túc Đóng Gói Cao Cấp" },
      productType: "Set quà tân gia",
      catalogOrder: 29,
      collectionIds: ["qua-tang", "ban-an"],
      useCases: ["gift", "housewarming"],
      keywords: ["tân gia", "quà tân gia", "bàn ăn", "set quà cao cấp"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 2100000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Bộ quà tân gia trọn bộ", optionValues: {}, sku: "HEDY-DEMO-HQTG", priceVnd: 2100000, inventory: { state: "in-stock", sellableQuantity: 3, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img1", retailEligibility: "retail" }],
      description: { short: "Bộ quà tân gia khởi sắc mang lời chúc ấm êm và no đủ, gửi trọn yêu thương vào tổ ấm mới.", long: "Tuyển chọn những món gốm bàn ăn tiêu biểu với sắc men ấm cúng, đóng gói trong hộp quà nhung sang trọng." },
      facts: { dimensions: { customerText: "Hộp quà lớn: 38 × 30 × 14 cm", status: "illustrative" }, packedShippingProfile: { id: "large-gift-suite", weightGrams: 2800, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm cao cấp & đũa gỗ tự nhiên", finish: "Đóng gói nghi thức", useRestrictions: "Quà mừng tân gia, khai trương.", care: "Hướng dẫn sử dụng đính kèm.", handmadeVariation: "Nơ thắt thủ công.", packaging: "Hộp quà nhung cao cấp có quai xách.", policySummary: "Bảo hành vận chuyển tuyệt đối." },
      media: [{ assetId: "img1", role: "prototype-primary", altIntent: "Hộp quà gốm bàn ăn tân gia sang trọng và ấm cúng.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding", "volume"], customerText: "Thiết kế bộ quà tân gia riêng theo phong cách căn hộ." },
      related: { productFixtureIds: ["simple-in-stock", "multi-variant"], caseFixtureIds: ["corporate-volume"], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "gift-couple": {
      fixtureId: "gift-couple",
      slug: "hop-qua-cap-coc-doi",
      truthStatus: "illustrative",
      fixturePurpose: "Set quà tặng hai cốc gốm đồng điệu cho cặp đôi.",
      name: { short: "Hộp Quà Cốc Gốm Đôi", long: "Hộp Quà Cặp Cốc Gốm Đôi Khắc Họa Tiết Tình Thân" },
      productType: "Set quà kỷ niệm",
      catalogOrder: 30,
      collectionIds: ["qua-tang"],
      useCases: ["gift", "couple"],
      keywords: ["cốc đôi", "quà cưới", "kỷ niệm", "quà tặng"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 760000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Cặp 2 cốc", optionValues: {}, sku: "HEDY-DEMO-HQCD", priceVnd: 760000, inventory: { state: "in-stock", sellableQuantity: 5, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "productGiftLinen", retailEligibility: "retail" }],
      description: { short: "Hai chiếc cốc mang sắc men hòa hợp biểu trưng cho sự đồng điệu và gắn kết dài lâu.", long: "Lựa chọn ngọt ngào cho ngày kỷ niệm, ngày cưới hoặc món quà chúc mừng ngày chung đôi." },
      facts: { dimensions: { customerText: "Kích thước hộp: 22 × 14 × 10 cm", status: "illustrative" }, packedShippingProfile: { id: "couple-box", weightGrams: 900, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá vuốt tay", finish: "Men mờ ấm", useRestrictions: "Uống trà, cà phê.", care: "Dễ vệ sinh.", handmadeVariation: "Sắc men mỗi chiếc tương đồng nhưng độc bản.", packaging: "Hộp quà bọc nơ lụa.", policySummary: "Kèm thiệp chúc mừng viết tay." },
      media: [{ assetId: "productGiftLinen", role: "prototype-primary", altIntent: "Cặp cốc gốm đôi trong hộp quà trang nhã.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding"], customerText: "Khắc chữ cái tên hai người lên đáy cốc làm kỷ niệm." },
      related: { productFixtureIds: ["mug-sand"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "gift-fragrance": {
      fixtureId: "gift-fragrance",
      slug: "set-binh-hoa-va-tinh-dau",
      truthStatus: "illustrative",
      fixturePurpose: "Set quà tặng bình hoa gốm nhỏ và tinh dầu thiên nhiên.",
      name: { short: "Set Bình Hoa & Tinh Dầu", long: "Set Quà Bình Gốm Nhỏ & Tinh Dầu Trầm Tĩnh Không Gian" },
      productType: "Set quà thư giãn",
      catalogOrder: 31,
      collectionIds: ["qua-tang", "goc-nha"],
      useCases: ["gift", "home-decor", "relaxation"],
      keywords: ["tinh dầu", "bình hoa", "thư giãn", "quà tặng"],
      retailEligibility: "retail",
      catalogPrice: { type: "single", amountVnd: 1350000 },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Bình + Tinh dầu 30ml", optionValues: {}, sku: "HEDY-DEMO-SQTD", priceVnd: 1350000, inventory: { state: "in-stock", sellableQuantity: 4, quantityStatus: "illustrative" }, leadTime: { status: "ready", customerText: "Sẵn sàng gửi trong 1-2 ngày." }, primaryAssetId: "img4", retailEligibility: "retail" }],
      description: { short: "Sự kết hợp vỗ về khứu giác và thị giác: một chiếc bình gốm nhỏ cùng lọ tinh dầu gỗ tuyết tùng thơm ngát.", long: "Mang lại năng lượng chữa lành và cảm giác an trú cho không gian sống sau ngày dài bận rộn." },
      facts: { dimensions: { customerText: "Kích thước hộp: 24 × 18 × 12 cm", status: "illustrative" }, packedShippingProfile: { id: "fragrance-box", weightGrams: 1100, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm đá & tinh dầu thuần tự nhiên", finish: "Đóng gói sang trọng", useRestrictions: "Tạo hương không gian.", care: "Tránh tiếp xúc mắt.", handmadeVariation: "Bình hoa vuốt tay từng chiếc.", packaging: "Hộp quà sang trọng bọc nơ.", policySummary: "Đổi trả nếu hư vỡ." },
      media: [{ assetId: "img4", role: "prototype-primary", altIntent: "Hộp quà xanh mở với bình gốm và hoa khô thơm mát.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["gift"], customerText: "Lựa chọn mùi hương tinh dầu theo sở thích của người nhận." },
      related: { productFixtureIds: ["vase-dew"], caseFixtureIds: [], serviceRoute: "custom.html?source=product" },
      policyLinks: ["policies.html#giao-hang-va-hu-hong", "policies.html#doi-tra-huy-hoan"]
    },
    "gift-corporate": {
      fixtureId: "gift-corporate",
      slug: "set-qua-doanh-nghiep-khac-dau",
      truthStatus: "illustrative",
      fixturePurpose: "Dịch vụ giải pháp quà tặng doanh nghiệp chế tác riêng.",
      name: { short: "Set Quà Doanh Nghiệp", long: "Set Quà Tặng Gốm Doanh Nghiệp Khắc Logo Đóng Hộp Gỗ Cao Cấp" },
      productType: "Dịch vụ quà doanh nghiệp",
      catalogOrder: 32,
      collectionIds: ["qua-tang"],
      useCases: ["gift", "corporate"],
      keywords: ["quà doanh nghiệp", "khắc logo", "quà đối tác", "quà tết", "đặt riêng"],
      retailEligibility: "enquiry-only",
      catalogPrice: { type: "consultation-required", minVnd: 1850000, maxVnd: null, rangeBasis: "consultation" },
      defaultVariantId: "default",
      options: [],
      variants: [{ id: "default", label: "Theo yêu cầu", optionValues: {}, sku: "HEDY-CUSTOM-CORP", priceVnd: 1850000, inventory: { state: "made-to-order", sellableQuantity: null, quantityStatus: "consultation" }, leadTime: { status: "custom", customerText: "Thời gian chế tác 2-3 tuần." }, primaryAssetId: "customGiftBox", retailEligibility: "enquiry-only" }],
      description: { short: "Giải pháp quà tặng độc bản cho sự kiện, hội nghị và đối tác cao cấp với dấu ấn thương hiệu tinh tế.", long: "Tùy biến trọn gói từ màu men theo nhận diện, khắc chìm logo thương hiệu đến thiết kế bao bì và thiệp thư tri ân." },
      facts: { dimensions: { customerText: "Thiết kế riêng theo quy cách yêu cầu", status: "illustrative" }, packedShippingProfile: { id: "corp-pallet", weightGrams: 3000, fragile: true, parcelRule: "one-parcel", status: "illustrative" }, material: "Gốm chế tác theo đơn đặt hàng", finish: "Khắc logo chìm / mạ kim", useRestrictions: "Quà tặng sự kiện doanh nghiệp.", care: "Có hướng dẫn theo từng món.", handmadeVariation: "Chế tác thủ công theo mẫu duyệt.", packaging: "Hộp gỗ / hộp cứng in ấn nhận diện.", policySummary: "Ký kết hợp đồng và cam kết chất lượng." },
      media: [{ assetId: "customGiftBox", role: "prototype-primary", altIntent: "Hộp quà tặng gốm chế tác khắc dấu tinh tế bọc nơ linen.", status: "prototype-only" }],
      customEscalation: { enabled: true, reasons: ["branding", "volume"], customerText: "Bấm để chuyển sang hành trình tư vấn Đặt riêng cho Doanh nghiệp." },
      related: { productFixtureIds: ["gift-calm"], caseFixtureIds: ["corporate-volume"], serviceRoute: "custom.html?use-case=corporate&source=shop" },
      policyLinks: ["policies.html#thanh-toan", "policies.html#doi-tra-huy-hoan"]
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
      default: { collectionIds: ["ban-an", "qua-tang", "goc-nha"], retailProductFixtureIds: ["simple-in-stock", "multi-variant", "mug-sand", "tray-stone", "fragile-large", "vase-dew", "gift-calm"], consultationFixtureIds: ["enquiry-only"] },
      "sparse-shop": { contentState: "sparse-shop", collectionIds: ["ban-an"], productFixtureIds: ["simple-in-stock"], preserveLayoutWithoutPlaceholders: true },
      "media-failure": { mediaState: "failed", preserveProductFacts: true, fallbackAssetId: "missing-product-primary" }
    },
    custom: {
      default: { contentState: "limited-cases", contactState: "default", caseFixtureIds: ["individual-personalized", "corporate-volume", "hospitality-venue"] },
      "limited-cases": { contentState: "limited-cases", contactState: "contextual" },
      "no-cases": { contentState: "no-cases", contactState: "contextual" },
      "failed-case-media": { contentState: "failed-case-media", mediaState: "case-failed", contactState: "contextual" },
      "channel-unavailable": { contentState: "limited-cases", contactState: "zalo-unavailable", unavailableChannel: "zalo", alternateChannel: "instagram" },
      rich: { contentState: "rich", customerFacing: false, requiresApprovedCaseEvidence: true, routeEligibleFixtureIds: [] },
      "missing-commercial-guidance": { contentState: "limited-cases", commercialGuidanceState: "missing", safeFallback: "confirmed-after-consultation" }
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
    custom: ["default", "limited-cases", "no-cases", "failed-case-media", "channel-unavailable", "rich", "missing-commercial-guidance"],
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
          productFixtureId: "mug-sand",
          variantId: "men-cat",
          quantity: 2,
          unitPriceVnd: 360000,
          lineStatus: "current"
        },
        {
          productFixtureId: "simple-in-stock",
          variantId: "kem",
          quantity: 1,
          unitPriceVnd: 520000,
          lineStatus: "current"
        },
        {
          productFixtureId: "tray-stone",
          variantId: "da-moc",
          quantity: 1,
          unitPriceVnd: 680000,
          lineStatus: "current"
        },
        {
          productFixtureId: "vase-dew",
          variantId: "suong-mo",
          quantity: 1,
          unitPriceVnd: 750000,
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
